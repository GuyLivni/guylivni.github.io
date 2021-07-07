import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import Helmet from 'react-helmet';

import Footer from '../Footer';
import Latest from '../Latest';
import Header from '../Header';
import GithubCorner from '../GithubCorner';
import { GlobalStyles, themes } from '../../styles';
import { useDarkMode, useSiteData } from '../../hooks';
import { Content } from './Layout.styled';

type LayoutProps = {
  children: React.ReactNode;
  location: { pathname: string };
};

const queryClient = new QueryClient();

const Layout = ({ children, location }: LayoutProps) => {
  const [isDark, setDark] = useDarkMode();
  const { metadata, footer, header } = useSiteData();
  const { repoUrl, author } = metadata;
  const { darkTheme, mainTheme } = themes;

  if (isDark === undefined) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDark ? darkTheme : mainTheme}>
        <>
          <Helmet
            meta={[
              {
                name: 'theme-color',
                content: isDark ? darkTheme.colors.p000 : mainTheme.colors.p600,
              },
            ]}
          />
          <GlobalStyles />
          <GithubCorner url={repoUrl} />
          <Header
            location={location}
            onModeSwitch={(checked) => setDark(checked)}
            isDark={isDark}
            author={author}
            navigation={header.navigation}
          />
          <Content location={location}>{children}</Content>
          <Footer
            copyrights={footer.copyrights}
            socialLinks={metadata.socialLinks}
          >
            <Latest />
          </Footer>
        </>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Layout;

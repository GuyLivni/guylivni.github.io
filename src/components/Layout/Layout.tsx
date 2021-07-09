import React from 'react';
import { HistoryLocation } from '@reach/router';
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

type Props = {
  children: React.ReactNode;
  location: HistoryLocation;
};

const queryClient = new QueryClient();

const Layout = ({ children, location }: Props) => {
  const [isDark, setDark] = useDarkMode(false);
  const { metadata, footer, header } = useSiteData();
  const { repoUrl, author } = metadata;
  const { darkTheme, mainTheme } = themes;

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

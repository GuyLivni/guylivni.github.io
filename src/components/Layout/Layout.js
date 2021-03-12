import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';
import Helmet from 'react-helmet';

import Footer from '../Footer';
import Latest from '../Latest';
import Header from '../Header';
import Toast from '../Toast';
import GithubCorner from '../GithubCorner';
import { GlobalStyles, themes } from '../../styles';
import { useDarkMode, useSiteData, useToastsData } from '../../hooks';

const contentStyles = ({ theme, location }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.p000};
  flex-grow: 1;
  transition: color ${theme.transitions.default},
    background ${theme.transitions.default};
  min-height: 59vh;
  padding: 25px 30px 80px 30px;

  @media ${theme.device.tablet} {
    padding: 25px 100px 40px 100px;
  }

  @media ${theme.device.desktop} {
    padding: 25px 200px 40px 200px;
  }

  @media ${theme.device.wideDesktop} {
    padding: 25px 300px 40px 300px;
  }
`;

const contentHomeStyles = ({ location }) =>
  location.pathname === '/' &&
  css`
    max-width: 100%;
    margin: 0;
  `;

const Content = styled('main')`
  ${contentStyles}${contentHomeStyles}
`;

function Layout({ children, location }) {
  const [isDark, setDark] = useDarkMode();
  const { metadata, footer, header } = useSiteData();
  const { toasts } = useToastsData();
  const { repoUrl, author } = metadata;
  const { darkTheme, mainTheme } = themes;

  if (isDark === undefined) return null;

  return (
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
        <Toast location={location} toasts={toasts} />
        <Header
          location={location}
          onModeSwitch={(checked) => setDark(checked)}
          isDark={isDark}
          author={author}
          repoUrl={repoUrl}
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
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object.isRequired,
};

export default Layout;

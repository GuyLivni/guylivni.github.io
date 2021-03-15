import styled, { css } from 'styled-components';

const contentStyles = ({ theme, location }) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.p000};
  flex-grow: 1;
  transition: color ${theme.transitions.default},
    background ${theme.transitions.default};
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

export const Content = styled('main')`
  ${contentStyles}${contentHomeStyles}
`;

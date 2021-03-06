import { createGlobalStyle, css } from 'styled-components';

const globalStyles = ({ theme }) => css`
  html {
    background-color: ${theme.colors.bodyBackground};
    transition: background ${theme.transitions.default};
  }

  body {
    color: ${theme.colors.textColor};
    transition: color ${theme.transitions.default};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${theme.colors.p700};
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: ${theme.colors.p700};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.p600};
  }
`;

export default createGlobalStyle`
  ${globalStyles}
`;
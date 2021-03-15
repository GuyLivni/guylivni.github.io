import { createGlobalStyle, css } from 'styled-components';

const globalStyles = ({ theme }) => css`
  @media ${theme.device.mobile} {
    html,
    body,
    .tl-edges,
    .tl-wrapper,
    #gatsby-focus-wrapper,
    #___gatsby {
      height: 100%;
    }
  }

  html,
  body {
    background-color: ${theme.colors.bodyBackground};
  }

  body {
    transition: color ${theme.transitions.default},
      background ${theme.transitions.default};
  }

  .tl-wrapper {
    display: flex;
    flex-direction: column;
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
    background-color: ${theme.colors.p300};
  }
`;

export default createGlobalStyle`
  ${globalStyles}
`;

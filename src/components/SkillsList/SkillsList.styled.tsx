import styled, { css, DefaultTheme } from 'styled-components';

const containerStyles = ({ theme }: { theme: DefaultTheme }) => css`
  @media ${theme.device.wideDesktop} {
    display: flex;
  }
`;

export const Container = styled('div')`
  ${containerStyles}
`;

const titleContainerStyles = ({ theme }: { theme: DefaultTheme }) => css`
  @media ${theme.device.wideDesktop} {
    width: 30%;
    margin-right: 10%;
  }
`;

export const TitleContainer = styled('div')`
  ${titleContainerStyles}
`;

const titleStyles = ({ theme }: { theme: DefaultTheme }) => css`
  margin-top: 0;
  color: ${theme.colors.p400};

  @media ${theme.device.wideDesktop} {
    font-size: 2rem;
  }
`;

export const Title = styled('h2')`
  ${titleStyles}
`;

const contentContainerStyles = ({ theme }: { theme: DefaultTheme }) => css`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  @media ${theme.device.desktop} {
    flex-direction: row;
  }

  @media ${theme.device.wideDesktop} {
    width: 60%;
  }
`;

export const ContentContainer = styled('div')`
  ${contentContainerStyles}
`;

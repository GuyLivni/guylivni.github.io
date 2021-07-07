import { GatsbyImage } from 'gatsby-plugin-image';
import styled, { css, DefaultTheme } from 'styled-components';

const containerStyles = ({ theme }: { theme: DefaultTheme }) => css`
  flex-direction: column;

  @media ${theme.device.tablet} {
    margin-top: 50px;
    display: flex;
  }

  @media ${theme.device.wideDesktop} {
    margin-top: 100px;
    display: flex;
    flex-direction: row;
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
  @media ${theme.device.wideDesktop} {
    width: 60%;
  }
`;

export const ContentContainer = styled('div')`
  ${contentContainerStyles}
`;

const imageStyles = ({ theme }: { theme: DefaultTheme }) => css`
  left: 0;
  top: 0;
  margin-bottom: 20px;
  max-height: 160px;

  @media ${theme.device.wideDesktop} {
    max-height: 300px;
  }
`;

export const Image = styled(GatsbyImage)`
  ${imageStyles}
`;

const textStyles = ({ theme }: { theme: DefaultTheme }) => css`
  color: ${theme.colors.textColor};

  @media ${theme.device.wideDesktop} {
    width: 80%;
  }
`;

export const Text = styled('p')`
  ${textStyles}
`;

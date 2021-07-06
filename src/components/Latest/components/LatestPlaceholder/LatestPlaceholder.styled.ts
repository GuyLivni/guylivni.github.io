import styled, { css, keyframes, DefaultTheme } from 'styled-components';

const placeHolderShimmer = keyframes`
  0%{
      background-position: -468px 0
  }
  100%{
      background-position: 468px 0
  }
`;

const shimmerAnimationStyles = ({ theme }: { theme: DefaultTheme }) => css`
  background: linear-gradient(
    90deg,
    ${theme.colors.p500} 8%,
    ${theme.colors.p200} 18%,
    ${theme.colors.p500} 33%
  );
  animation: ${placeHolderShimmer} linear infinite 1s forwards;
  background-size: 800px 104px;
`;

const containerStyles = ({ theme }: { theme: DefaultTheme }) => css`
  display: flex;
  align-items: flex-start;
  margin: 0 25px;
  width: 100%;

  @media ${theme.device.tablet} {
    width: initial;
    min-width: 250px;
  }
`;

export const Container = styled('div')`
  ${containerStyles}
`;

const iconStyles = ({ theme }: { theme: DefaultTheme }) => css`
  background: ${theme.colors.p500};
  margin: 0 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${theme.colors.p500};
  padding: 5px;
  ${shimmerAnimationStyles}
`;

export const Icon = styled('div')`
  ${iconStyles}
`;

const descriptionStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Description = styled('div')`
  ${descriptionStyles}
`;

const titleStyles = ({ theme }: { theme: DefaultTheme }) => css`
  width: 120px;
  height: 20px;
  margin: 5px 0 15px 0;
  background: ${theme.colors.p500};
  ${shimmerAnimationStyles}
`;

export const Title = styled('span')`
  ${titleStyles}
`;

const postTitleStyles = ({ theme }: { theme: DefaultTheme }) => css`
  width: 90px;
  height: 10px;
  background: ${theme.colors.p400};
  margin-bottom: 10px;
  ${shimmerAnimationStyles}
`;

export const PostTitle = styled('span')`
  ${postTitleStyles}
`;

const postDescriptionStyles = ({ theme }: { theme: DefaultTheme }) => css`
  width: 70px;
  height: 10px;
  background: ${theme.colors.p400};
  ${shimmerAnimationStyles}
`;

export const PostDescription = styled('span')`
  ${postDescriptionStyles}
`;

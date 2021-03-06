import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const placeHolderShimmer = keyframes`
  0%{
      background-position: -468px 0
  }
  100%{
      background-position: 468px 0
  }
`;

const shimmerAnimationStyles = ({ theme }) => css`
  background: linear-gradient(
    90deg,
    ${theme.colors.p500} 8%,
    ${theme.colors.p200} 18%,
    ${theme.colors.p500} 33%
  );
  animation: ${placeHolderShimmer} linear infinite 1s forwards;
  background-size: 800px 104px;
`;

const containerStyles = ({ theme }) => css`
  display: flex;
  align-items: flex-start;
  margin: 0 25px;
  width: 100%;

  ${theme.mq.medium`
     width: initial;
     min-width: 250px;
  `};
`;

const Container = styled('div')`
  ${containerStyles}
`;

const iconStyles = ({ theme }) => css`
  background: ${theme.colors.p500};
  margin: 0 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${theme.colors.p500};
  padding: 5px;
  ${shimmerAnimationStyles}
`;

const Icon = styled('div')`
  ${iconStyles}
`;

const descriptionStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Description = styled('div')`
  ${descriptionStyles}
`;

const titleStyles = ({ theme }) => css`
  width: 120px;
  height: 20px;
  margin: 5px 0 15px 0;
  background: ${theme.colors.p500};
  ${shimmerAnimationStyles}
`;

const Title = styled('span')`
  ${titleStyles}
`;

const postTitleStyles = ({ theme }) => css`
  width: 90px;
  height: 10px;
  background: ${theme.colors.p400};
  margin-bottom: 10px;
  ${shimmerAnimationStyles}
`;

const PostTitle = styled('span')`
  ${postTitleStyles}
`;

const postDescriptionStyles = ({ theme }) => css`
  width: 70px;
  height: 10px;
  background: ${theme.colors.p400};
  ${shimmerAnimationStyles}
`;

const PostDescription = styled('span')`
  ${postDescriptionStyles}
`;

function LatestPlaceHolder() {
  return (
    <Container>
      <Icon />
      <Description>
        <Title />
        <PostTitle />
        <PostDescription />
      </Description>
    </Container>
  );
}

export default LatestPlaceHolder;

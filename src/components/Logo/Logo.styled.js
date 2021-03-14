import styled, { css, keyframes } from 'styled-components';

const containerStyles = ({ theme }) => css`
  cursor: pointer;
  display: flex;
  color: ${theme.colors.p600};
  font-size: 22px;
  font-weight: ${theme.fontWeight.bold};
  font-family: Montserrat, sans-serif;
  line-height: 30px;
  overflow: hidden;

  @media ${theme.device.desktop} {
    font-size: 24px;
  }
`;

export const Container = styled('div')`
  ${containerStyles}
`;

const fadeLettersDown = keyframes`
    0% {
        transform: translate(0px, 0%)
    }

    100% {
        transform: translate(0px, 100%)
    }
`;

const fadeLettersUp = keyframes`
    0% {
        transform: translate(0px, 100%)
    }

    100% {
        transform: translate(0px, 0%)
    }
`;

const firstNamePostFixStyles = css`
  overflow: hidden;
  animation: ${fadeLettersDown} 0.5s 1s ease-in-out both;

  ${Container}:hover & {
    animation: ${fadeLettersUp} 0.5s ease-in-out both;
  }
`;

export const FirstNamePostFix = styled('span')`
  ${firstNamePostFixStyles}
`;

const firstLetterTransformLeft = keyframes`
    0% {
        transform: translate(0px, 0px)
    }

    100% {
        transform: translate(-36px, 0px)
    }
`;

const firstLetterTransformRight = keyframes`
    0% {
        transform: translate(-36px, 0px)
    }

    100% {
        transform: translate(0px, 0px)
    }
`;

const firstLetterLastNameStyles = css`
  overflow: hidden;
  animation: ${firstLetterTransformLeft} 0.4s 1.4s ease-in-out both;

  ${Container}:hover & {
    animation: ${firstLetterTransformRight} 0.4s ease-in-out both;
  }
`;

export const FirstLetterLastName = styled('span')`
  ${firstLetterLastNameStyles}
`;

const lastNamePostFixStyles = css`
  overflow: hidden;
  animation: ${fadeLettersDown} 0.5s 1.1s ease-in-out both;

  ${Container}:hover & {
    animation: ${fadeLettersUp} 0.5s 0.2s ease-in-out both;
  }
`;

export const LastNamePostFix = styled('span')`
  ${lastNamePostFixStyles}
`;

const endingTransformLeft = keyframes`
    0% {
        transform: translate(0px, 0px)
    }

    100% {
        transform: translate(-78px, 0px)
    }
`;

const endingTransformRight = keyframes`
    0% {
        transform: translate(-78px, 0px)
    }

    100% {
        transform: translate(0px, 0px)
    }
`;

const endingStyles = css`
  overflow: hidden;
  animation: ${endingTransformLeft} 0.4s 1.3s ease-in-out both;

  ${Container}:hover & {
    animation: ${endingTransformRight} 0.4s ease-in-out both;
  }
`;

export const Ending = styled('span')`
  ${endingStyles}
`;

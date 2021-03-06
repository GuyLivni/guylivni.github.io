import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { fadeInDown } from '../../styles/animations';

const popUp = keyframes`
    0% {
        animation-timing-function: cubic-bezier(.42,0,0,1);
        transform: scale(.95)
    }

    26% {
        animation-timing-function: cubic-bezier(.73,0,.51,1);
        transform: scale(1.168)
    }

    80% {
        animation-timing-function: cubic-bezier(.39,0,.52,1);
        transform: scale(1.056)
    }

    to {
        transform: scale(1.1)
    }
`;

const popDown = keyframes`
    0% {
        animation-timing-function: cubic-bezier(.17,.11,.6,.83);
        transform: scale(1.08)
    }

    33% {
        animation-timing-function: cubic-bezier(.04,.25,.61,1.01);
        transform: scale(.87)
    }

    to {
        transform: scale(.85)
    }
`;

const containerStyles = ({ theme }) => css`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${theme.colors.p600};
  animation: ${fadeInDown} 0.6s 0.2s ease both;
`;

const Container = styled('div')`
  ${containerStyles}
`;

const titleStyles = ({ theme }) => css`
  font-size: 22px;
  margin-left: 6px;
  font-weight: ${theme.fontWeight.bold};
  transition: transform ${theme.transitions.default};
  font-family: Montserrat, sans-serif;

  @media ${theme.device.wideDesktop} {
    font-size: 24px;
  }

  ${Container}:hover & {
    animation-duration: 0.5s;
    animation-name: ${popUp};
    animation-fill-mode: both;
  }

  ${Container}:active & {
    animation-duration: 0.1s;
    animation-name: ${popDown};
    animation-fill-mode: both;
  }
`;

const Title = styled('div')`
  ${titleStyles}
`;

function Logo({ title }) {
  return (
    <Container>
      <Title>{title}.</Title>
    </Container>
  );
}

Logo.propTypes = {
  title: PropTypes.string,
};

export default Logo;

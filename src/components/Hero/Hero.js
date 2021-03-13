import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Social from '../Social';
import { animations } from '../../styles';

const containerStyles = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 0;
  transform: rotate(0deg) scale(1) translateX(0) translateZ(0px)
    perspective(100px);
  transition: all 0.3s ease;
  cursor: default;

  @media ${theme.device.desktop} {
    padding: 0;
    :hover {
      transform: rotate(-0.5deg) scale(1.1) translateX(25px) translateY(-15px)
        translateZ(5px) perspective(100px);
    }
  }

  @media ${theme.device.wideDesktop} {
    max-width: 90%;
  }

  @media ${theme.device.extraWideDesktop} {
    max-width: 80%;
  }
`;

const Container = styled('div')`
  ${containerStyles}
`;

const preStyles = ({ theme }) => css`
  margin: 0;
  align-self: end;
  color: ${theme.colors.p300};
  font-size: 40px;
  animation: ${animations.fadeInUp} 0.6s 0.2s ease-out both;

  @media ${theme.device.tablet} {
    font-size: 50px;
  }

  @media ${theme.device.wideDesktop} {
    font-size: 60px;
  }
`;

const PreTitle = styled('span')`
  ${preStyles}
`;

const postTitleStyles = ({ theme }) => css`
  animation: ${animations.fadeInUp} 0.6s 0.6s ease-out both;
`;

const PostTitle = styled('span')`
  ${postTitleStyles}
`;

const titleStyles = ({ theme }) => css`
  color: ${theme.colors.p400};
  font-size: 40px;
  font-weight: ${theme.fontWeight.bold};
  margin: 0 0 15px 0;
  animation: ${animations.fadeInUp} 0.6s 0.3s ease-out both;

  @media ${theme.device.tablet} {
    font-size: 50px;
    margin: 0 0 30px 0;
  }

  @media ${theme.device.wideDesktop} {
    font-size: 60px;
  }
`;

const Title = styled('h1')`
  ${titleStyles}
`;

function Hero({ title, titlePrefix, description, socialLinks }) {
  return (
    <Container>
      <Container>
        <Title>
          <PreTitle>{titlePrefix} </PreTitle>
          <PostTitle>{title}</PostTitle>
        </Title>
      </Container>
      <Social links={socialLinks} showTitle animate />
    </Container>
  );
}

Hero.propTypes = {
  socialLinks: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  titlePrefix: PropTypes.string,
  description: PropTypes.string,
};

export default Hero;

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

  ${theme.mq.medium` 
     padding: 0;
  `};

  ${theme.mq.huge`
     width: 80%; 
  `};
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

  ${theme.mq.medium`
     font-size: 50px;
  `};

  ${theme.mq.huge`
     font-size: 60px;
  `};
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

  ${theme.mq.medium`
     font-size: 50px;
     margin: 0 0 30px 0;
  `};

  ${theme.mq.huge`
     font-size: 60px;
  `};
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

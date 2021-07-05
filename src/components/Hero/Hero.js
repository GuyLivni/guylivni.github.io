import React from 'react';
import PropTypes from 'prop-types';
import Social from '../Social';
import { Container, Title, PreTitle, PostTitle } from './Hero.styled';

function Hero({ title, titlePrefix, socialLinks }) {
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

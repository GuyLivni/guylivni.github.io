import React from 'react';
import Social from '../Social';
import { Container, Title, PreTitle, PostTitle } from './Hero.styled';
import { SocialLinks } from '../../types/Social';

type HeroProps = {
  title: string;
  titlePrefix: string;
  socialLinks: SocialLinks;
};

const Hero = ({ title, titlePrefix, socialLinks }: HeroProps) => {
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
};

export default Hero;

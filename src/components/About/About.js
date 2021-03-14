import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  TitleContainer,
  Title,
  ContentContainer,
  Image,
  Text,
} from './About.styled';

function About({ title, image, content }) {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <ContentContainer>
        <Image image={image} alt="Author image" />
        <Text>{content.content}</Text>
      </ContentContainer>
    </Container>
  );
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
};

export default About;

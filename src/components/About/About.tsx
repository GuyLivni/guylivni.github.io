import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import {
  Container,
  TitleContainer,
  Title,
  ContentContainer,
  Image,
  Text,
} from './About.styled';

type Props = {
  title: string;
  image: IGatsbyImageData;
  content: Record<string, string>;
};

const About = ({ title, image, content }: Props) => (
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

export default About;

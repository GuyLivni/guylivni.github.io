import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const containerStyles = ({ theme }) => css`
  flex-direction: column;

  ${theme.mq.medium`
    margin-top: 50px;
    display: flex;
  `};

  ${theme.mq.huge`
    margin-top: 100px;
    display: flex;
    flex-direction: row;
  `};
`;

const Container = styled('div')`
  ${containerStyles}
`;

const titleContainerStyles = ({ theme }) => css`
  ${theme.mq.huge`
     width: 30%;
     margin-right: 10%;
  `};
`;

const TitleContainer = styled('div')`
  ${titleContainerStyles}
`;

const titleStyles = ({ theme }) => css`
  margin-top: 0;
  color: ${theme.colors.p400};

  ${theme.mq.huge`
    font-size: 2rem;
  `};
`;

const Title = styled('h2')`
  ${titleStyles}
`;

const contentContainerStyles = ({ theme }) => css`
  ${theme.mq.huge`
    width: 60%;
  `};
`;

const ContentContainer = styled('div')`
  ${contentContainerStyles}
`;

const imageStyles = ({ theme }) => css`
  left: 0;
  top: 0;
  margin-bottom: 20px;
  max-height: 160px;
  ${theme.mq.huge`
     max-height: 300px;
  `};
`;

const Image = styled(GatsbyImage)`
  ${imageStyles}
`;

const textStyles = ({ theme }) => css`
  color: ${theme.colors.textColor};
  ${theme.mq.huge`
     width: 80%;
  `};
`;

const Text = styled('p')`
  ${textStyles}
`;

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

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import SkillItem from './components/SkillItem';

const containerStyles = ({ theme }) => css`
  ${theme.mq.huge`
    display: flex;
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
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  ${theme.mq.large`
    flex-direction: row;
  `};

  ${theme.mq.huge`
    width: 60%;
  `};
`;

const ContentContainer = styled('div')`
  ${contentContainerStyles}
`;

function SkillsList({ title, skills }) {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <ContentContainer>
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </ContentContainer>
    </Container>
  );
}

SkillsList.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

export default SkillsList;

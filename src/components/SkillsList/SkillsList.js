import React from 'react';
import PropTypes from 'prop-types';
import SkillItem from './components/SkillItem';
import {
  Container,
  TitleContainer,
  Title,
  ContentContainer,
} from './SkillsList.styled';

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

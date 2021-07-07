import React from 'react';
import SkillItem from './components/SkillItem';
import {
  Container,
  TitleContainer,
  Title,
  ContentContainer,
} from './SkillsList.styled';

type Skills = {
  title: string;
  description: string[];
};

type Props = {
  title: string;
  skills: Skills[];
};

const SkillsList = ({ title, skills }: Props) => (
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

export default SkillsList;

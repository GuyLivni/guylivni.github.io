import React from 'react';
import { Container, SkillTitle, Skill } from './SkillItem.styled';

type Props = {
  title: string;
  description: string[];
};

const SkillItem = ({ title, description }: Props) => {
  return (
    <Container>
      <SkillTitle>{title}</SkillTitle>
      <ul>
        {description.map((item, index) => (
          <Skill key={index}>{item}</Skill>
        ))}
      </ul>
    </Container>
  );
};

export default SkillItem;

import React from 'react';
import PropTypes from 'prop-types';
import { Container, SkillTitle, Skill } from './SkillItem.styled';

function SkillItem({ title, description }) {
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
}

SkillItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
};

export default SkillItem;

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const containerStyles = ({ theme }) => css`
  margin: 40px 40px 0 0;

  :first-child {
    margin-top: 0;
  }

  @media ${theme.device.desktop} {
    margin: 0 80px 0 0;
  }
`;

const Container = styled('div')`
  ${containerStyles}
`;

const skillTitleStyles = ({ theme }) => css`
  color: ${theme.colors.p600};
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  letter-spacing: 0;
  text-transform: none;
`;

const SkillTitle = styled('h4')`
  ${skillTitleStyles}
`;

const skillStyles = ({ theme }) => css`
  color: ${theme.colors.textColor};
`;

const Skill = styled('li')`
  ${skillStyles}
`;

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

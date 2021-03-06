import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { underlineEffect } from '../../../../styles/animations';

const containerStyles = ({ theme }) => css`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 100%;

  ${theme.mq.medium`
     justify-content: flex-start;
     margin: 0 25px;
     width: initial;
     min-width: 250px;
  `};
`;

const Container = styled('div')`
  ${containerStyles}
`;

const styledIconStyles = ({ theme }) => css`
  svg {
    font-size: 40px;
    color: ${theme.colors.p500};
    margin: 0 10px;
    border-radius: 50%;
    border: 2px solid ${theme.colors.p500};
    padding: 5px;
  }
`;

const StyledIcon = styled('div')`
  ${styledIconStyles}
`;

const headerStyles = ({ theme }) => css`
  font-size: 20px;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.p500};
`;

const Header = styled('div')`
  ${headerStyles}
`;

const titleStyles = ({ theme }) => css`
  position: relative;
  color: ${theme.colors.p500};
  box-shadow: inset 0 -1px 0 0 rgba(255, 255, 255, 0.1);
  font-weight: ${theme.fontWeight.standard};
  font-size: 14px;
  width: fit-content;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  ${underlineEffect};
  :before {
    background-color: ${theme.colors.p500};
  }
`;

const Title = styled('a')`
  ${titleStyles}
`;

const Description = styled('a')`
  ${titleStyles}
  font-size: 12px;
`;

const Content = styled('div')`
  display: flex;
  flex-direction: column;
`;

function LatestItem({
  header,
  title,
  titleUrl,
  description,
  descriptionUrl,
  icon,
}) {
  return (
    <Container>
      <StyledIcon>{icon}</StyledIcon>
      <Content>
        <Header>{header}</Header>
        <Title target="_blank" href={titleUrl} rel="noopener noreferrer">
          {title}
        </Title>
        <Description
          target="_blank"
          href={descriptionUrl}
          rel="noopener noreferrer"
        >
          {description}
        </Description>
      </Content>
    </Container>
  );
}

LatestItem.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string,
  titleUrl: PropTypes.string,
  description: PropTypes.string,
  descriptionUrl: PropTypes.string,
  icon: PropTypes.node,
};

export default LatestItem;

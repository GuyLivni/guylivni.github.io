import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  StyledIcon,
  Content,
  Header,
  Title,
  Description,
} from './LatestItem.styled';

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

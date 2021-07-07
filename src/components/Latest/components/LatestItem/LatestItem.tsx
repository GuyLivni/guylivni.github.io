import React from 'react';
import {
  Container,
  StyledIcon,
  Content,
  Header,
  Title,
  Description,
} from './LatestItem.styled';

type Props = {
  header: string;
  title: string;
  titleUrl?: string;
  description: string;
  descriptionUrl?: string;
  icon: React.ReactNode;
};

const LatestItem = ({
  header,
  title,
  titleUrl,
  description,
  descriptionUrl,
  icon,
}: Props) => (
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

export default LatestItem;

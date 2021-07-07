import React, { Fragment } from 'react';
import { Title, SubTitle, Text } from './ShortText.styled';

type Props = {
  title: string;
  subTitle: string;
  content: Record<string, string>;
};

const ShortText = ({ title, subTitle, content }: Props) => (
  <Fragment>
    <Title>{title}</Title>
    {subTitle && <SubTitle>{subTitle}</SubTitle>}
    {content && <Text>{content.content}</Text>}
  </Fragment>
);

export default ShortText;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Title, SubTitle, Text } from './ShortText.styled';

function ShortText({ title, subTitle, content }) {
  return (
    <Fragment>
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      {content && <Text>{content.content}</Text>}
    </Fragment>
  );
}

ShortText.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  content: PropTypes.object,
};

export default ShortText;

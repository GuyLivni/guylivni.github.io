import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const titleStyles = ({ theme }) => css`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 3.5rem;
  color: ${theme.colors.p600};
  text-align: center;
`;

const Title = styled('h1')`
  ${titleStyles}
`;

const subTitleStyles = ({ theme }) => css`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: ${theme.colors.p600};
  text-align: center;
`;

const SubTitle = styled('h2')`
  ${subTitleStyles}
`;

const Text = styled('p')`
  text-align: center;
`;

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

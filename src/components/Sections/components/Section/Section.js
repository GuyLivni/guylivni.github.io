import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled('div')`
  margin-bottom: 40px;

  :only-child,
  :last-child {
    margin: 0;
  }
`;

function Section({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Section.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Section;

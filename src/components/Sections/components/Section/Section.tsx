import React from 'react';
import styled from 'styled-components';

const Container = styled('div')`
  margin-bottom: 40px;

  :only-child,
  :last-child {
    margin: 0;
  }
`;

type Props = {
  children: React.ReactNode;
};

const Section = ({ children, ...rest }: Props) => {
  return <Container {...rest}>{children}</Container>;
};

export default Section;

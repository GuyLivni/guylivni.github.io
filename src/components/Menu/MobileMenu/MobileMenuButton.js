import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const lineStyles = ({ theme }) => css`
  width: 20px;
  height: 3px;
  background-color: ${theme.colors.p600};
`;

const Line = styled('div')`
  ${lineStyles}
`;

const buttonStyles = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 25px;
  width: 35px;
  background: transparent;
  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  }

  @media ${theme.device.tablet} {
    display: none;
  }
`;

const Button = styled('button')`
  ${buttonStyles}
`;

function MobileMenuButton({ onMenuToggle }) {
  return (
    <Button onClick={onMenuToggle} aria-label="mobile menu">
      <Line />
      <Line />
      <Line />
    </Button>
  );
}

MobileMenuButton.propTypes = {
  onMenuToggle: PropTypes.func.isRequired,
};

export default MobileMenuButton;

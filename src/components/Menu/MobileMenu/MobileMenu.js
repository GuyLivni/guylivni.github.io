import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const navStyles = ({ isDisplayed, theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100%;
  background: ${theme.colors.p000};
  box-shadow: 1px 0px 8px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  z-index: 2;
  transform: ${isDisplayed ? 'translateX(0)' : 'translateX(-110%)'};
  transition: transform 0.3s ease-out;

  @media ${theme.device.tablet} {
    display: none;
  }
`;

const Nav = styled('div')`
  ${navStyles}
`;

const backdropStyles = ({ theme }) => css`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;

  @media ${theme.device.tablet} {
    display: none;
  }
`;

const Backdrop = styled('div')`
  ${backdropStyles}
`;

function MobileMenu({ onMenuClose, isDisplayed, links }) {
  return (
    <Fragment>
      {isDisplayed && (
        <Backdrop onClick={onMenuClose} isDisplayed={isDisplayed} />
      )}
      <Nav isDisplayed={isDisplayed}>{links}</Nav>
    </Fragment>
  );
}

MobileMenu.propTypes = {
  onMenuClose: PropTypes.func.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
  links: PropTypes.array.isRequired,
};

export default MobileMenu;

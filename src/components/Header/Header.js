import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import Menu from '../Menu';
import DarkModeToggle from '../DarkModeToggle';
import Logo from '../Logo';

const containerStyles = ({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  padding: 50px 25px 25px 25px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: ${theme.colors.p000};
  transition: color ${theme.transitions.default},
    background ${theme.transitions.default};
  min-height: 10vh;

  ${theme.mq.medium`
    padding: 40px 100px 0 100px;
  `};

  ${theme.mq.large`
    padding: 40px 200px 0 200px;
  `};

  ${theme.mq.huge`
    padding: 40px 300px 0 300px;
  `};
`;

const Container = styled('header')`
  ${containerStyles}
`;

const navContainerStyles = css`
  display: flex;
`;

const NavContainer = styled('div')`
  ${navContainerStyles}
`;

function Header({ location, onModeSwitch, isDark, author, navigation }) {
  return (
    <Container>
      <Logo title={author} />
      <NavContainer>
        <Menu location={location} routes={navigation.routes} />
        <DarkModeToggle onModeSwitch={onModeSwitch} isDark={isDark} />
      </NavContainer>
    </Container>
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
  onModeSwitch: PropTypes.func.isRequired,
  isDark: PropTypes.bool,
  author: PropTypes.string,
  navigation: PropTypes.shape({
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string,
        label: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default Header;

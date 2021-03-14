import PropTypes from 'prop-types';
import React from 'react';
import Menu from '../Menu';
import DarkModeToggle from '../DarkModeToggle';
import Logo from '../Logo';
import { Container, NavContainer } from './Header.styled';

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

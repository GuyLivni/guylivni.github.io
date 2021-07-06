import React from 'react';
import Menu from '../Menu';
import DarkModeToggle from '../DarkModeToggle';
import Logo from '../Logo';
import { Container, NavContainer } from './Header.styled';
import { ModeSwitch } from '../../types/DarkMode';
import { Routes } from '../../types/Menu';

type HeaderProps = {
  location: Record<string, unknown>;
  onModeSwitch: ModeSwitch;
  isDark: boolean;
  author: string;
  navigation: Record<string, Routes>;
};

function Header({
  location,
  onModeSwitch,
  isDark,
  author,
  navigation,
}: HeaderProps) {
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

export default Header;

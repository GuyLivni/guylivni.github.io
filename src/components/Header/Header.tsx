import React from 'react';
import { HistoryLocation } from '@reach/router';
import Menu from '../Menu';
import DarkModeToggle from '../DarkModeToggle';
import Logo from '../Logo';
import { Container, NavContainer } from './Header.styled';
import { ModeSwitch } from '../../types/DarkMode';
import { Routes } from '../../types/Menu';

type Props = {
  location: HistoryLocation;
  onModeSwitch: ModeSwitch;
  isDark: boolean;
  author: string;
  navigation: Record<string, Routes>;
};

const Header = ({
  location,
  onModeSwitch,
  isDark,
  author,
  navigation,
}: Props) => (
  <Container>
    <Logo title={author} />
    <NavContainer>
      <Menu location={location} routes={navigation.routes} />
      <DarkModeToggle onModeSwitch={onModeSwitch} isDark={isDark} />
    </NavContainer>
  </Container>
);

export default Header;

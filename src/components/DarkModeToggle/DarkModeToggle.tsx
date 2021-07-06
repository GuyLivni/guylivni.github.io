import React from 'react';
import Switch from 'react-switch';
import { DefaultTheme } from 'styled-components';
import { Moon, Sun } from './Icons';
import DarkModeWebToggle from './DarkModeWebToggle';
import { Label } from './DarkModeToggle.styled';
import { ModeSwitch } from '../../types/DarkMode';

type DarkModeToggleProps = {
  onModeSwitch: ModeSwitch;
  isDark: boolean;
  theme: DefaultTheme;
};

const DarkModeToggle = ({
  onModeSwitch,
  isDark,
  theme,
}: DarkModeToggleProps) => {
  return (
    <>
      <DarkModeWebToggle onModeSwitch={onModeSwitch} isDark={isDark} />
      <Label>
        <Switch
          checkedIcon={<Moon />}
          uncheckedIcon={<Sun />}
          offColor={theme.colors.black}
          onColor={theme.colors.black}
          onChange={onModeSwitch}
          checked={isDark}
          width={50}
          height={24}
          activeBoxShadow={`0 0 2px 3px ${theme.colors.p600}`}
          aria-label="dark mode toggle"
        />
      </Label>
    </>
  );
};

export default DarkModeToggle;

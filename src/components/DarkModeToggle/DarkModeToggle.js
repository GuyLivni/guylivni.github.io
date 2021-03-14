import React from 'react';
import Switch from 'react-switch';
import PropTypes from 'prop-types';
import { Moon, Sun } from './Icons';
import DarkModeWebToggle from './DarkModeWebToggle';
import { Label } from './DarkModeToggle.styled';

function DarkModeToggle({ onModeSwitch, isDark, theme }) {
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
}

DarkModeToggle.propTypes = {
  onModeSwitch: PropTypes.func.isRequired,
  isDark: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
};

export default DarkModeToggle;

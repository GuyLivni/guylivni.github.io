import React from 'react';
import {
  Container,
  Switch,
  Label,
  ToggleBtn,
} from './DarkModeWebToggle.styled';
import { ModeSwitch } from '../../types/DarkMode';

const DarkModeWebToggle = ({
  onModeSwitch,
  isDark,
}: {
  onModeSwitch: ModeSwitch;
  isDark: boolean;
}) => {
  return (
    <Container>
      <Switch
        id="toggleMode"
        checked={isDark}
        type="checkbox"
        area-label="toggleMode"
        onChange={(e) => onModeSwitch(e.target.checked)}
      />
      <Label htmlFor="toggleMode">
        <ToggleBtn isDark={isDark} />
      </Label>
    </Container>
  );
};

export default DarkModeWebToggle;

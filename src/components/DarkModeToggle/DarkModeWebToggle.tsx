import React from 'react';
import {
  Container,
  Switch,
  Label,
  ToggleBtn,
} from './DarkModeWebToggle.styled';

type DarkModeWebToggleProps = {
  onModeSwitch: Function;
  isDark: boolean;
};

const DarkModeWebToggle = ({
  onModeSwitch,
  isDark,
}: DarkModeWebToggleProps) => {
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

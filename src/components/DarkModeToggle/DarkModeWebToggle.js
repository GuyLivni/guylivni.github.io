import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Switch,
  Label,
  ToggleBtn,
} from './DarkModeWebToggle.styled';

function DarkModeWebToggle({ onModeSwitch, isDark }) {
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
}

DarkModeWebToggle.propTypes = {
  onModeSwitch: PropTypes.func.isRequired,
  isDark: PropTypes.bool.isRequired,
};

export default DarkModeWebToggle;

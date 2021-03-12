import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { fadeInFromRight } from '../../styles/animations';

const labelStyles = css`
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  animation: ${fadeInFromRight} 0.6s 0.3s ease both;
`;

const Label = styled('label')`
  ${labelStyles}
`;

const containerStyles = ({ theme }) => css`
  position: fixed;
  top: 28%;
  right: 120px;
  z-index: 10;
  display: none;

  @media ${theme.device.tablet} {
    display: block;
  }
`;

const Container = styled('div')`
  ${containerStyles}
`;

const Switch = styled('input')`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
`;

const lightStyles = ({ isDark, theme }) => css`
  :before {
    content: 'LIGHT';
    color: ${isDark ? theme.colors.p300 : theme.colors.p000};
    background: ${isDark ? theme.colors.p200 : theme.colors.p400};
    border-radius: 0;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    right: 4px;
    writing-mode: vertical-rl;
    line-height: 16px;
    padding: 0 12px;
  }
`;

const darkStyles = ({ isDark, theme }) => css`
  :after {
    content: 'DARK';
    color: ${isDark ? theme.colors.white : theme.colors.p400};
    background: ${isDark ? theme.colors.p400 : theme.colors.p000};
    border-radius: 0;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    transform: translate3d(0, 73px, 0);
    top: 1px;
    left: 2px;
    writing-mode: vertical-lr;
    line-height: 40px;
    z-index: 5;
  }

  :hover {
    :before,
    :after {
      transition: all 0.3s ease;
      border: 1px solid ${theme.colors.p400};
    }
    :before {
      color: ${isDark ? theme.colors.white : theme.colors.p400};
      background: ${isDark ? theme.colors.p400 : theme.colors.p000};
    }
    :after {
      color: ${isDark ? theme.colors.p300 : theme.colors.p000};
      background: ${isDark ? theme.colors.p200 : theme.colors.p400};
    }
  }
`;

const toggleBtnStyles = ({ theme }) => css`
  position: relative;
  cursor: pointer;
  flex: 0 0 46px;

  :before,
  :after {
    border: 1px solid ${theme.colors.p400};
    text-transform: uppercase;
    text-align: center;
    position: absolute;
    width: 40px;
    height: 75px;
  }
`;

const ToggleBtn = styled('div')`
  ${toggleBtnStyles}
  ${darkStyles}
  ${lightStyles}
`;

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

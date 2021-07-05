/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

const baseStyles = css`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100%;
`;

const moonStyles = ({ theme }: { theme: DefaultTheme }) => css`
  font-size: 14px;
  padding: 0px 0 0px 3px;
  ${baseStyles}

  @media ${theme.device.tablet} {
    padding: 1px 0 0px 2px;
  }
`;

const StyledMoon = styled('span')`
  ${moonStyles}
`;

const sunStyles = ({ theme }: { theme: DefaultTheme }) => css`
  font-size: 17px;
  padding: 0;
  ${baseStyles}

  @media ${theme.device.tablet} {
    padding: 1px 0px 0px 1px;
  }
`;

const StyledSun = styled('span')`
  ${sunStyles}
`;

export const Moon = () => (
  <StyledMoon role="img" aria-label="Dark">
    🌙
  </StyledMoon>
);

export const Sun = () => (
  <StyledSun role="img" aria-label="Light">
    ☀️
  </StyledSun>
);

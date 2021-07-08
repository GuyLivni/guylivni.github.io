import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { underlineEffect } from '../../../styles/animations';

const containerStyles = ({ theme }: { theme: DefaultTheme }) => css`
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  box-shadow: 0px -2px 6px 0px ${theme.colors.p200};
  border-top: 1px solid ${theme.colors.p200};
  background: ${theme.colors.p000};
  height: 56px;
  flex-basis: auto;
  flex-shrink: 0;
  transition: all ${theme.transitions.default};

  @media ${theme.device.tablet} {
    display: none;
  }
`;

export const Container = styled('div')`
  ${containerStyles}
`;

const selectedLinkStyles = ({
  to,
  pathname,
}: {
  to: string;
  pathname: string;
}) =>
  to === pathname &&
  css`
    :before {
      transform: scaleX(1);
    }
  `;

const linkStyles = ({ theme }: { theme: DefaultTheme }) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  text-decoration: none;
  text-align: center;
  box-shadow: none;
  flex-grow: 1;
  outline-style: none;
  ${underlineEffect}
  :before {
    height: 3px;
    top: 0;
    background-color: ${theme.colors.p300};
  }
`;

export const Link = styled(GatsbyLink).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    color: theme.colors.p700,
  })
)`
  ${linkStyles};
  ${selectedLinkStyles};
`;

const selectedIconStyles = ({
  to,
  pathname,
}: {
  to: string;
  pathname: string;
}) =>
  to === pathname &&
  css`
    opacity: 1;
  `;

const iconStyles = ({ theme }: { theme: DefaultTheme }) => css`
  font-size: 26px;
  color: ${theme.colors.p300};
  margin: 0 auto;
  display: block;
  transition: all 0.25s cubic-bezier(0.42, 0, 0, 1);
  opacity: 0.7;
  flex: 1;
  position: relative;

  ${Link}:hover & {
    transform: scale(1.1);
  }

  ${Link}:active & {
    transform: scale(0.85);
  }
`;

export const StyledIcon = styled(({ component, ...props }) =>
  React.cloneElement(component, props)
)`
  ${iconStyles};
  ${selectedIconStyles};
`;

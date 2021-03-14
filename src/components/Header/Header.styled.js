import styled, { css } from 'styled-components';

const containerStyles = ({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  padding: 50px 25px 25px 25px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: ${theme.colors.p000};
  transition: color ${theme.transitions.default},
    background ${theme.transitions.default};
  min-height: 10vh;

  @media ${theme.device.tablet} {
    padding: 40px 100px 0 100px;
  }

  @media ${theme.device.desktop} {
    padding: 40px 200px 0 200px;
  }

  @media ${theme.device.wideDesktop} {
    padding: 40px 300px 0 300px;
  }
`;

export const Container = styled('header')`
  ${containerStyles}
`;

const navContainerStyles = css`
  display: flex;
`;

export const NavContainer = styled('div')`
  ${navContainerStyles}
`;

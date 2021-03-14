import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { underlineEffect, fadeInDown } from '../../styles/animations';

const navStyles = ({ theme }) => css`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 20px;

  @media ${theme.device.tablet} {
    margin-right: 50px;
    animation: ${fadeInDown} 0.6s 0.2s ease both;
  }
`;

export const Nav = styled('nav')`
  ${navStyles}
`;

const selectedLinkStyles = ({ to, pathname, theme }) =>
  to === pathname &&
  css`
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.p600};
    :before {
      background-color: ${theme.colors.p600};
      transform: scaleX(1);
    }
  `;

const linkStyles = ({ theme }) => css`
  position: relative;
  display: flex;
  align-items: center;
  color: ${theme.colors.p400};
  margin: 0px 1rem;
  text-decoration: none;
  outline-width: 0;
  letter-spacing: 0.075em;
  font-size: 30px;
  font-weight: ${theme.fontWeight.standard};
  box-shadow: none;
  transition: color, transform ${theme.transitions.default};

  ${underlineEffect};
  :before {
    bottom: -2px;
    height: 2px;
  }

  :hover {
    color: ${theme.colors.p600};
  }

  @media ${theme.device.tablet} {
    font-size: 16px;
    height: 100%;
  }
`;

export const Link = styled(GatsbyLink)`
  ${linkStyles} ${selectedLinkStyles}
`;

const navLinkStyles = ({ theme }) => css`
  display: none;

  @media ${theme.device.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

export const NavLinks = styled('div')`
  ${navLinkStyles}
`;

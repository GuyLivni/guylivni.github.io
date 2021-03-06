import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { underlineEffect } from '../../../styles/animations';

const containerStyles = ({ theme }) => css`
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

const Container = styled('div')`
  ${containerStyles}
`;

const selectedLinkStyles = ({ theme, to, pathname }) =>
  to === pathname &&
  css`
    :before {
      transform: scaleX(1);
    }
  `;

const linkStyles = ({ theme }) => css`
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

const Link = styled(GatsbyLink)`
  ${linkStyles}${selectedLinkStyles}
`;

const selectedIconStyles = ({ theme, to, pathname }) =>
  to === pathname &&
  css`
    opacity: 1;
  `;

const iconStyles = ({ theme }) => css`
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

const StyledIcon = styled(({ component, ...props }) =>
  React.cloneElement(component, props)
)`
  ${iconStyles}${selectedIconStyles}
`;

function MobileMenuBottom({ location, routes }) {
  return (
    <Container>
      {routes.map(({ Icon, path, label }, index) => (
        <Link key={index} to={path} pathname={location.pathname}>
          <StyledIcon
            pathname={location.pathname}
            to={path}
            component={<Icon />}
          />
        </Link>
      ))}
    </Container>
  );
}

MobileMenuBottom.propTypes = {
  location: PropTypes.object.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string,
      Icon: PropTypes.func,
    })
  ).isRequired,
};

export default MobileMenuBottom;

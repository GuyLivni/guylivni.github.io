import React, { useState } from 'react';
import { HistoryLocation } from '@reach/router';
// @ts-ignore
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import {
  FaHome,
  FaUserCircle,
  FaFeatherAlt,
  FaEnvelope,
} from 'react-icons/fa/';
import MobileMenu from './MobileMenu';
import { Nav, NavLinks, Link } from './Menu.styled';
import { Routes } from '../../types/Menu';

const ICON_MAP = {
  Home: FaHome,
  About: FaUserCircle,
  Blog: FaFeatherAlt,
  Contact: FaEnvelope,
};

const mapRoutesWithIcons = (routes: Routes) =>
  routes.map(({ path, label }) => {
    return {
      path,
      label,
      Icon: ICON_MAP[label],
    };
  });

const transitionDirections = ['top', 'right', 'left', 'bottom'];
const getRandomTransitionDirection = () =>
  transitionDirections[Math.floor(Math.random() * transitionDirections.length)];

type MenuProps = {
  location: HistoryLocation;
  routes: Routes;
};

const Menu = ({ location, routes }: MenuProps) => {
  const [transitionDirection, setTransitionDirection] = useState(
    getRandomTransitionDirection()
  );
  const routesWithIcons = mapRoutesWithIcons(routes);
  const getTransitionDirection = () =>
    setTransitionDirection(getRandomTransitionDirection());

  return (
    <Nav>
      <TransitionPortal>
        <MobileMenu location={location} routes={routesWithIcons} />
      </TransitionPortal>
      <NavLinks>
        {routes.map(({ path, label }) => (
          <Link
            cover
            direction={transitionDirection}
            key={path}
            pathname={location.pathname}
            to={path}
            onClick={getTransitionDirection}
          >
            {label}
          </Link>
        ))}
      </NavLinks>
    </Nav>
  );
};

export default Menu;

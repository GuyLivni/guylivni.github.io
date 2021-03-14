import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FaHome,
  FaUserCircle,
  FaFeatherAlt,
  FaEnvelope,
} from 'react-icons/fa/';
import MobileMenu from './MobileMenu';
import { Nav, NavLinks, Link } from './Menu.styled';

const ICON_MAP = {
  Home: FaHome,
  About: FaUserCircle,
  Blog: FaFeatherAlt,
  Contact: FaEnvelope,
};

const mapRoutesWithIcons = (routes) =>
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

function Menu({ location, routes }) {
  const [transitionDirection, setTransitionDirection] = useState(
    getRandomTransitionDirection()
  );
  const routesWithIcons = mapRoutesWithIcons(routes);
  const getTransitionDirection = () =>
    setTransitionDirection(getRandomTransitionDirection());

  return (
    <Nav>
      <MobileMenu location={location} routes={routesWithIcons} />
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
}

Menu.propTypes = {
  location: PropTypes.object.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
};

export default Menu;

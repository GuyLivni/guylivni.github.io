import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FaHome,
  FaUserCircle,
  FaFeatherAlt,
  FaEnvelope,
} from 'react-icons/fa/';
import MobileMenuBottom from './MobileMenuBottom';
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

function Menu({ location, routes }) {
  const [isMobileMenuOpen, setIsOpen] = useState(false);
  const routesWithIcons = mapRoutesWithIcons(routes);

  return (
    <Nav>
      <MobileMenuBottom location={location} routes={routesWithIcons} />
      <NavLinks>
        {routes.map(({ path, label }) => (
          <Link
            key={path}
            pathname={location.pathname}
            to={path}
            onClick={() => isMobileMenuOpen && setIsOpen(false)}
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

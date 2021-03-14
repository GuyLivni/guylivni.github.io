import React from 'react';
import PropTypes from 'prop-types';
import { Container, Link, StyledIcon } from './MobileMenu.styled';

function MobileMenu({ location, routes }) {
  return (
    <Container>
      {routes.map(({ Icon, path, label }, index) => (
        <Link paintDrip key={index} to={path} pathname={location.pathname}>
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

MobileMenu.propTypes = {
  location: PropTypes.object.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string,
      Icon: PropTypes.func,
    })
  ).isRequired,
};

export default MobileMenu;

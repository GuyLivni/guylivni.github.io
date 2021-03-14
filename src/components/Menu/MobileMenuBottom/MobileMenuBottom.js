import React from 'react';
import PropTypes from 'prop-types';
import { Container, Link, StyledIcon } from './MobileMenuBottom.styled';

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

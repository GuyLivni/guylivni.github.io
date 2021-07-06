import React from 'react';
import { Container, Link, StyledIcon } from './MobileMenu.styled';
import { Routes } from '../../../types/Menu';

type MobileMenuProps = {
  location: Record<string, unknown>;
  routes: Routes;
};

const MobileMenu = ({ location, routes }: MobileMenuProps) => {
  return (
    <Container>
      {routes.map(({ Icon, path }, index) => (
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
};

export default MobileMenu;

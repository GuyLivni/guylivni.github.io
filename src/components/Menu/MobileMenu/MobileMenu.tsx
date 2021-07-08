import React from 'react';
import { HistoryLocation } from '@reach/router';
// @ts-ignore
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import { Container, Link, StyledIcon } from './MobileMenu.styled';
import { Routes } from '../../../types/Menu';

type MobileMenuProps = {
  location: HistoryLocation;
  routes: Routes;
};

const MobileMenu = ({ location, routes }: MobileMenuProps) => {
  return (
    <TransitionPortal>
      <Container>
        {routes.map(({ Icon, path }, index) => (
          <Link key={index} to={path} pathname={location.pathname}>
            <StyledIcon
              pathname={location.pathname}
              to={path}
              component={<Icon />}
            />
          </Link>
        ))}
      </Container>
    </TransitionPortal>
  );
};

export default MobileMenu;

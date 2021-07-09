import React from 'react';
import { HistoryLocation } from '@reach/router';
import { Container, Link, StyledIcon } from './MobileMenu.styled';
import { Routes } from '../../../types/Menu';

type Props = {
  location: HistoryLocation;
  routes: Routes;
};

const MobileMenu = ({ location, routes }: Props) => (
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
);

export default MobileMenu;

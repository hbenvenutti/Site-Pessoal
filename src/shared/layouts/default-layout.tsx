import { Outlet } from 'react-router-dom';

import { Sidebar } from '../components/sidebar';

import { Container } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const DefaultLayout = (): ReactElement => (
  <Container>
    <Sidebar />
    <Outlet />
  </Container>
);

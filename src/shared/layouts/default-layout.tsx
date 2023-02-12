import { Outlet } from 'react-router-dom';

import { Sidebar } from '../components/sidebar';
import { Header } from '../components/header';

import { Container } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const DefaultLayout = (): ReactElement => (
  <>
    <Header />
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  </>
);

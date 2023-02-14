import { Outlet } from 'react-router-dom';

import { Sidebar } from '../components/sidebar';
import { Header } from '../components/header';
import { MobileMenu } from '../components/mobile-menu';
import { useMobileMenu } from '../hooks/mobile-menu-context';

import { Container } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const DefaultLayout = (): ReactElement => {
  // *** --- Contexts ----------------------------------------------------------------------- *** //
  const { isMobileMenuOpen } = useMobileMenu();

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <>
      <Header />
      <Container>
        {isMobileMenuOpen ? (
          <MobileMenu />
        ) : (
          <>
            <Sidebar />
            <Outlet />
          </>
        )}
      </Container>
    </>
  );
};

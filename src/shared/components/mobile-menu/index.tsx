import { NavLink } from 'react-router-dom';

import { useMobileMenu } from '../../hooks/mobile-menu-context';

import { MobileMenuWrapper } from './styles';
import { MobileLanguageSelector } from './components/mobile-language-selector';
import { MobileThemeSelectorButton } from './components/mobile-theme-selector';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const MobileMenu = (): ReactElement => {
  // *** --- Contexts ----------------------------------------------------------------------- *** //
  const { closeMobileMenu } = useMobileMenu();

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <MobileMenuWrapper>
      <MobileThemeSelectorButton />
      <MobileLanguageSelector />
      <NavLink
        onClick={closeMobileMenu}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        onClick={closeMobileMenu}
        to="/about"
      >
        Sobre
      </NavLink>
      <NavLink
        onClick={closeMobileMenu}
        to="/projects"
      >
        Projetos
      </NavLink>
      <NavLink
        onClick={closeMobileMenu}
        to="/education"
      >
        Educação
      </NavLink>
      <NavLink
        onClick={closeMobileMenu}
        to="/experience"
      >
        Experiência
      </NavLink>
      <NavLink
        onClick={closeMobileMenu}
        to="/certificates"
      >
        Certificados
      </NavLink>
    </MobileMenuWrapper>
  );
};

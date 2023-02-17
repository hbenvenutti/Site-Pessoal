import { NavLink } from 'react-router-dom';

import { useMobileMenu } from '../../hooks/mobile-menu-context';

import { MobileMenuWrapper } from './styles';
import { MobileLanguageSelector } from './mobile-language-selector';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const MobileMenu = (): ReactElement => {
  // *** --- Contexts ----------------------------------------------------------------------- *** //
  const { closeMobileMenu } = useMobileMenu();

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <MobileMenuWrapper>
      <MobileLanguageSelector />
      <NavLink
        onClick={closeMobileMenu}
        to="/"
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

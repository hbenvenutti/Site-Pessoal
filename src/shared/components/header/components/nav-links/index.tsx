import { NavLink } from 'react-router-dom';

import { useMobileMenu } from '../../../../hooks/mobile-menu-context';

import { NavLinksWrapper } from './styles';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function NavLinks(): ReactElement {
  // *** --- Contexts --------------------------------------------------- *** //
  const { closeMobileMenu } = useMobileMenu();

  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <NavLinksWrapper>
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
    </NavLinksWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { NavLinks };

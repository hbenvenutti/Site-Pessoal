import { NavLink } from 'react-router-dom';

import { MobileMenuWrapper } from './styles';
import { MobileLanguageSelector } from './mobile-language-selector';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const MobileMenu = (): ReactElement => {
  return (
    <MobileMenuWrapper>
      <MobileLanguageSelector />
      <NavLink to="/">Sobre</NavLink>
      <NavLink to="/">Projetos</NavLink>
      <NavLink to="/">Educação</NavLink>
      <NavLink to="/experience">Experiências</NavLink>
      <NavLink to="/certificates">Certificados</NavLink>
    </MobileMenuWrapper>
  );
};

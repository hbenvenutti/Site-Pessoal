import { NavLink } from 'react-router-dom';

import { LanguageSelector } from '../header/components/language-selector';

import { MobileMenuWrapper } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const MobileMenu = (): ReactElement => {
  return (
    <MobileMenuWrapper>
      <LanguageSelector />
      <NavLink to="/">Sobre</NavLink>
      <NavLink to="/">Projetos</NavLink>
      <NavLink to="/">Educação</NavLink>
      <NavLink to="/">Experiências</NavLink>
      <NavLink to="/certificates">Certificados</NavLink>
    </MobileMenuWrapper>
  );
};

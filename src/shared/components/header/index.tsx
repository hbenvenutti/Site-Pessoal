import { NavLink } from 'react-router-dom';

import logo from '../../../assets/logo.png';

import { HeaderWrapper } from './styles';
import { LanguageSelector } from './components/language-selector';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const Header = (): ReactElement => {
  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <HeaderWrapper>
      <div className="logo-wrapper">
        <img
          className="logo"
          src={logo}
          alt="Logo: HB escrito como uma tag HTML fechada em sí mesma"
        />
        <h2>HBenvenutti</h2>
      </div>
      <div className="nav-links">
        <NavLink to="/">Sobre</NavLink>
        <NavLink to="/">Projetos</NavLink>
        <NavLink to="/">Educação</NavLink>
        <NavLink to="/">Experiências</NavLink>
        <NavLink to="/certificates">Certificados</NavLink>
      </div>
      <LanguageSelector />
    </HeaderWrapper>
  );
};

import { NavLink } from 'react-router-dom';

import { HeaderWrapper } from './styles';
import { LanguageSelector } from './components/language-selector';
import { HamburgerIcon } from './components/hamburger-icon';
import { ThemeSelectorButton } from './components/theme-selector';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const Header = (): ReactElement => {
  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <HeaderWrapper>
      <div className="logo-wrapper">
        <strong>
          <span className="logo">{'<'}</span>hb/<span className="logo">{'>'}</span>
        </strong>
        <h2>HBenvenutti</h2>
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/projects">Projetos</NavLink>
        <NavLink to="/education">Educação</NavLink>
        <NavLink to="/experience">Experiência</NavLink>
        <NavLink to="/certificates">Certificados</NavLink>
      </div>
      <div className="selectors-wrapper">
        <ThemeSelectorButton />
        <LanguageSelector />
      </div>

      <HamburgerIcon />
    </HeaderWrapper>
  );
};

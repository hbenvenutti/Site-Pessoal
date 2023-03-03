import { HeaderWrapper } from './styles';
import { LanguageSelector } from './components/language-selector';
import { HamburgerIcon } from './components/hamburger-icon';
import { ThemeSelectorButton } from './components/theme-selector';
import { NavLinks } from './components/nav-links';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

export const Header = (): ReactElement => {
  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <HeaderWrapper>
      <div className="logo-wrapper">
        <strong>
          <span className="logo">{'<'}</span>
          hb/
          <span className="logo">{'>'}</span>
        </strong>
        <h2>HBenvenutti</h2>
      </div>

      <div className="nav-links">
        <NavLinks />
      </div>

      <div className="selectors-wrapper">
        <ThemeSelectorButton />
        <LanguageSelector />
      </div>

      <HamburgerIcon />
    </HeaderWrapper>
  );
};

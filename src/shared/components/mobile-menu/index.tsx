import { LanguageSelector } from '../header/components/language-selector';
import { NavLinks } from '../header/components/nav-links';

import { MobileMenuWrapper } from './styles';
import { MobileThemeSelectorButton } from './components/mobile-theme-selector';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const MobileMenu = (): ReactElement => {
  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <MobileMenuWrapper>
      <MobileThemeSelectorButton />

      <LanguageSelector />
      <NavLinks />
    </MobileMenuWrapper>
  );
};

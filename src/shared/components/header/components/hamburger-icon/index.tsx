import { useMobileMenu } from '../../../../hooks/mobile-menu-context';

import { HamburgerIconWrapper } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const HamburgerIcon = (): ReactElement => {
  // *** --- Contexts ----------------------------------------------------------------------- *** //
  const { changeMenuState } = useMobileMenu();

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <HamburgerIconWrapper>
      <input
        type="checkbox"
        id="hamburger-checkbox"
        onChange={changeMenuState}
      />

      <label htmlFor="hamburger-checkbox">
        <span className="hamburger-first-line" />
        <span className="hamburger-second-line" />
        <span className="hamburger-third-line" />
      </label>
    </HamburgerIconWrapper>
  );
};

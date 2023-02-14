import { useEffect } from 'react';

import { useMobileMenu } from '../../../../hooks/mobile-menu-context';

import { HamburgerIconWrapper } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const HamburgerIcon = (): ReactElement => {
  // *** --- Contexts ----------------------------------------------------------------------- *** //
  const { changeMenuState, closeMobileMenu } = useMobileMenu();

  // *** --- Functions ---------------------------------------------------------------------- *** //
  const handleIconDisappearance = (): void => {
    const checkbox = document.getElementById('hamburger-checkbox') as HTMLInputElement;

    if (window.innerWidth < 1450) return;

    if (!checkbox) return;

    checkbox.checked = false;

    closeMobileMenu();
  };

  useEffect(() => {
    window.addEventListener('resize', handleIconDisappearance);

    return () => {
      window.removeEventListener('resize', handleIconDisappearance);
    };
  }, []);

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <HamburgerIconWrapper id="hamburger-icon-wrapper">
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

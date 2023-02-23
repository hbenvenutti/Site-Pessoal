import { FaMoon, FaSun } from 'react-icons/fa';

import { useThemeButton } from '../../../../hooks/theme';
import { defaultTheme } from '../../../../styles/themes/default';
import { darkTheme } from '../../../../styles/themes/dark-theme';

import { MobileThemeSelectorButtonWrapper } from './styles';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function MobileThemeSelectorButton(): ReactElement {
  // *** --- Contexts --------------------------------------------------- *** //
  const { changeTheme } = useThemeButton();

  // *** --- Functions -------------------------------------------------- *** //
  function onSelectorClick(): void {
    const checkbox = document.getElementById('mobile-theme-selector') as HTMLInputElement;

    if (!checkbox) return;

    const theme = checkbox.checked ? darkTheme : defaultTheme;

    changeTheme(theme);
  }

  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <MobileThemeSelectorButtonWrapper>
      <div onClick={onSelectorClick}>
        <input
          type="checkbox"
          id="mobile-theme-selector"
        />
        <label htmlFor="mobile-theme-selector">
          <div className="selector" />
          <FaMoon className="moon" />
          <FaSun className="sun" />
        </label>
      </div>
    </MobileThemeSelectorButtonWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { MobileThemeSelectorButton };

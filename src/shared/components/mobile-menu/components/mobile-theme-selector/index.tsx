import { FaMoon, FaSun } from 'react-icons/fa';
import { useEffect } from 'react';

import { useThemeButton } from '../../../../hooks/theme';
import { darkTheme } from '../../../../styles/themes/dark-theme';
import { lightTheme } from '../../../../styles/themes/light';

import { MobileThemeSelectorButtonWrapper } from './styles';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function MobileThemeSelectorButton(): ReactElement {
  // *** --- Contexts --------------------------------------------------- *** //
  const { changeTheme, theme } = useThemeButton();

  // *** --- Vars ------------------------------------------------------- *** //

  // *** --- Functions -------------------------------------------------- *** //
  function onSelectorClick(): void {
    // eslint-disable-next-line prettier/prettier
    const checkbox = document
      .getElementById('mobile-theme-selector') as HTMLInputElement;

    if (!checkbox) return;

    const theme = checkbox.checked ? darkTheme : lightTheme;

    changeTheme(theme);
  }

  // *** --- Effects ---------------------------------------------------- *** //
  useEffect(() => {
    if (theme === lightTheme) return;

    // eslint-disable-next-line prettier/prettier
    const checkbox = document
      .getElementById('mobile-theme-selector') as HTMLInputElement;

    checkbox.checked = true;
  }, [theme]);

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

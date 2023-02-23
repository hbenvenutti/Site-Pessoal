import { FaMoon, FaSun } from 'react-icons/fa';

import { useThemeButton } from '../../../../hooks/theme';
import { defaultTheme } from '../../../../styles/themes/default';
import { darkTheme } from '../../../../styles/themes/dark-theme';

import { ThemeSelectorButtonWrapper } from './styles';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function ThemeSelectorButton(): ReactElement {
  // *** --- Contexts --------------------------------------------------- *** //
  const { changeTheme } = useThemeButton();

  // *** --- Functions -------------------------------------------------- *** //
  function onSelectorClick(): void {
    const checkbox = document.getElementById('theme-selector') as HTMLInputElement;

    if (!checkbox) return;
    const theme = checkbox.checked ? darkTheme : defaultTheme;
    // const theme = checkbox.checked ? defaultTheme : darkTheme;

    changeTheme(theme);
  }

  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <ThemeSelectorButtonWrapper>
      <div onClick={onSelectorClick}>
        <input
          type="checkbox"
          id="theme-selector"
        />
        <label htmlFor="theme-selector">
          <div className="selector" />
          <FaMoon className="moon" />
          <FaSun className="sun" />
        </label>
      </div>
    </ThemeSelectorButtonWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { ThemeSelectorButton };

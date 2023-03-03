import { FaMoon, FaSun } from 'react-icons/fa';
import { useEffect } from 'react';

import { useThemeButton } from '../../../../hooks/theme';
import { darkTheme } from '../../../../styles/themes/dark-theme';
import { lightTheme } from '../../../../styles/themes/light';

import { ThemeSelectorButtonWrapper } from './styles';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function ThemeSelectorButton(): ReactElement {
  // *** --- Contexts --------------------------------------------------- *** //
  const { changeTheme, theme } = useThemeButton();

  // *** --- Vars ------------------------------------------------------- *** //
  // eslint-disable-next-line prettier/prettier
  const checkbox = document
    .getElementById('theme-selector') as HTMLInputElement;

  // *** --- Functions -------------------------------------------------- *** //
  function onSelectorClick(): void {
    if (!checkbox) return;
    const theme = checkbox.checked ? darkTheme : lightTheme;

    changeTheme(theme);
  }

  // *** --- Effects ---------------------------------------------------- *** //
  useEffect(() => {
    if (theme === lightTheme) return;

    checkbox.checked = true;
  }, [theme]);

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

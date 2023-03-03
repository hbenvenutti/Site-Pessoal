import { createContext, useContext, useEffect, useState } from 'react';

import { darkTheme } from '../../styles/themes/dark-theme';
import { lightTheme } from '../../styles/themes/light';

import type { ThemeType } from '../../../@types/styles';
import type { ReactElement } from 'react';
import type {
  ThemeButtonContextData,
  ThemeButtonContextProps
} from '../../../@types/hooks/theme-selector';

// * ---------------------------------------------------------------------- * //

const ThemeButtonContext = createContext<ThemeButtonContextData>(
  {} as ThemeButtonContextData
);

// -------------------------------------------------------------------------- //

function ThemeButtonProvider({
  children
}: ThemeButtonContextProps): ReactElement {
  // *** --- States ----------------------------------------------------- *** //
  const [theme, setTheme] = useState<ThemeType>(lightTheme);

  // *** --- Functions -------------------------------------------------- *** //
  const changeTheme = (theme: ThemeType): void => {
    setTheme(theme);
  };

  // *** --- Effects ---------------------------------------------------- *** //
  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const theme = darkModeQuery.matches ? darkTheme : lightTheme;

    setTheme(theme);
  }, []);

  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <ThemeButtonContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeButtonContext.Provider>
  );
}

// -------------------------------------------------------------------------- //

const useThemeButton = (): ThemeButtonContextData =>
  useContext(ThemeButtonContext);

// * ---------------------------------------------------------------------- * //

export { ThemeButtonProvider };

// -------------------------------------------------------------------------- //

export { useThemeButton };

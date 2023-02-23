import { createContext, useContext, useState } from 'react';

import { defaultTheme } from '../../styles/themes/default';

import type { ThemeType } from '../../../@types/styles';
import type { ReactElement } from 'react';
import type {
  ThemeButtonContextData,
  ThemeButtonContextProps
} from '../../../@types/hooks/theme-selector';

// * ---------------------------------------------------------------------- * //

const ThemeButtonContext = createContext<ThemeButtonContextData>({} as ThemeButtonContextData);

// -------------------------------------------------------------------------- //

function ThemeButtonProvider({ children }: ThemeButtonContextProps): ReactElement {
  // *** --- States ----------------------------------------------------- *** //
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  // *** --- Functions -------------------------------------------------- *** //
  const changeTheme = (theme: ThemeType): void => {
    setTheme(theme);
  };

  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <ThemeButtonContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeButtonContext.Provider>
  );
}

// -------------------------------------------------------------------------- //

const useThemeButton = (): ThemeButtonContextData => useContext(ThemeButtonContext);

// * ---------------------------------------------------------------------- * //

export { ThemeButtonProvider };

// -------------------------------------------------------------------------- //

export { useThemeButton };

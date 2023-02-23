import type { ThemeType } from '../../styles';
import type { ReactNode } from 'react';

// * ------------------------------------------------------------------------------------------ * //

interface ThemeButtonContextData {
  theme: ThemeType;
  changeTheme: (theme: ThemeType) => void;
}

interface ThemeButtonContextProps {
  children: ReactNode;
}

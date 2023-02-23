import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles';
import { Router } from './routes';
import { MobileMenuProvider } from './hooks/mobile-menu-context';
import { useThemeButton } from './hooks/theme';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

export function App(): ReactElement {
  // *** --- Contexts --------------------------------------------------- *** //
  const { theme } = useThemeButton();

  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <ThemeProvider theme={theme}>
      <MobileMenuProvider>
        <GlobalStyle />
        <Router />
      </MobileMenuProvider>
    </ThemeProvider>
  );
}

import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles';
import { defaultTheme } from './styles/themes/default';
import { Router } from './routes';
import { MobileMenuProvider } from './hooks/mobile-menu-context';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export function App(): ReactElement {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MobileMenuProvider>
        <GlobalStyle />
        <Router />
      </MobileMenuProvider>
    </ThemeProvider>
  );
}

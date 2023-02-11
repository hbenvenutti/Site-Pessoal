import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles';
import { defaultTheme } from './styles/themes/default';
import { Router } from './routes';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export function App(): ReactElement {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

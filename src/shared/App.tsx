import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles';
import { defaultTheme } from './styles/themes/default';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export function App(): ReactElement {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>portifolio</h1>
    </ThemeProvider>
  );
}

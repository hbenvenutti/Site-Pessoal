import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './shared/App';
import { ThemeButtonProvider } from './shared/hooks/theme';

// * ------------------------------------------------------------------------------------------ * //

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeButtonProvider>
        <App />
      </ThemeButtonProvider>
    </BrowserRouter>
  </StrictMode>
);

import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from '../layouts/default-layout';
import { HomePage } from '../../pages/home';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const Router = (): ReactElement => (
  <Routes>
    <Route
      path="/"
      element={<DefaultLayout />}
    >
      <Route
        path="/"
        element={<HomePage />}
      />
    </Route>
  </Routes>
);

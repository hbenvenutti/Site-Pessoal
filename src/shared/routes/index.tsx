import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from '../layouts/default-layout';
import { HomePage } from '../../pages/home';
import { CertificatesPage } from '../../pages/certificates';
import { ExperiencePage } from '../../pages/experience';

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

      <Route
        path="/certificates"
        element={<CertificatesPage />}
      />

      <Route
        path="/experience"
        element={<ExperiencePage />}
      />
    </Route>
  </Routes>
);

import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from '../layouts/default-layout';
// import { HomePage } from '../../pages/home';
import { CertificatesPage } from '../../pages/certificates';
import { ExperiencePage } from '../../pages/experience';
import { EducationPage } from '../../pages/education';
import { ProjectsPage } from '../../pages/projects';
import { AboutPage } from '../../pages/about';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

export const Router = (): ReactElement => (
  <Routes>
    <Route
      path="/"
      element={<DefaultLayout />}
    >
      <Route
        path="/"
        element={<AboutPage />}
      />

      <Route
        path="/about"
        element={<AboutPage />}
      />

      <Route
        path="/certificates"
        element={<CertificatesPage />}
      />

      <Route
        path="/experience"
        element={<ExperiencePage />}
      />

      <Route
        path="/education"
        element={<EducationPage />}
      />

      <Route
        path="/projects"
        element={<ProjectsPage />}
      />
    </Route>
  </Routes>
);

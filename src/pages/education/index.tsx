import { EducationPageWrapper } from './styles';
import { EducationElement } from './components/education-element';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const EducationPage = (): ReactElement => {
  return (
    <EducationPageWrapper>
      <h1>Educação</h1>
      <EducationElement />
    </EducationPageWrapper>
  );
};

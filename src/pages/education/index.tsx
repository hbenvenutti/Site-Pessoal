import { educationList } from '../../shared/providers/education';

import { EducationPageWrapper } from './styles';
import { EducationElement } from './components/education-element';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const EducationPage = (): ReactElement => {
  return (
    <EducationPageWrapper>
      <h1>Educação</h1>
      {educationList.map(education => (
        <EducationElement
          key={education.institution}
          education={education}
        />
      ))}
    </EducationPageWrapper>
  );
};

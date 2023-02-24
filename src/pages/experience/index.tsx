import { experiences } from '../../shared/providers/experience';

import { ExperiencePageWrapper } from './styles';
import { ExperienceElement } from './components/experience-element';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const ExperiencePage = (): ReactElement => {
  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <ExperiencePageWrapper>
      {experiences.map(experience => (
        <ExperienceElement
          key={experience.title}
          experience={experience}
        />
      ))}
    </ExperiencePageWrapper>
  );
};

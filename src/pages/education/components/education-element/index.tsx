import { BsCalendarDate } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

import { EducationElementWrapper } from './styles';

import type { EducationElementProps } from '../../../../@types/providers/education';
import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function EducationElement({ education }: EducationElementProps): ReactElement {
  // *** --- Vars ------------------------------------------------------- *** //
  const { institution, course, finishDate, location, startDate } = education;

  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <EducationElementWrapper>
      <h2>{institution}</h2>
      <div>
        <span>
          <FaGraduationCap />
        </span>
        <p>
          <strong>{course}</strong>
        </p>
      </div>
      <div>
        <span>
          <BsCalendarDate />
        </span>
        <p>
          {Intl.DateTimeFormat('pt-br', { month: '2-digit', year: 'numeric' }).format(startDate)}

          {' - '}

          {typeof finishDate !== 'string'
            ? Intl.DateTimeFormat('pt-br', { month: '2-digit', year: 'numeric' }).format(finishDate)
            : finishDate}
        </p>
      </div>
      <div>
        <span>
          <HiLocationMarker />
        </span>
        <p>{location}</p>
      </div>
    </EducationElementWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { EducationElement };

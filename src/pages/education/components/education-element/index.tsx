import { BsCalendarDate } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

import { formatEducationDate } from '../../../../shared/utils/date-formatter';

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
        <span title="Curso.">
          <FaGraduationCap />
        </span>
        <p>
          <strong>{course}</strong>
        </p>
      </div>
      <div>
        <span title="Datas de ínicio e término.">
          <BsCalendarDate />
        </span>
        <p>
          {formatEducationDate(startDate)}

          {' - '}

          {
            // eslint-disable-next-line prettier/prettier
            typeof finishDate !== 'string' 
              ? formatEducationDate(finishDate) 
              : finishDate
          }
        </p>
      </div>
      <div>
        <span title="Cidade e estado">
          <HiLocationMarker />
        </span>
        <p>{location}</p>
      </div>
    </EducationElementWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { EducationElement };

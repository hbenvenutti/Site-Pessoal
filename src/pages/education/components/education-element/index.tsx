import { BsCalendarDate } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

import { EducationElementWrapper } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const EducationElement = (): ReactElement => {
  return (
    <EducationElementWrapper>
      <h2>Instituto Federal do Rio Grande do Sul - Campus Restinga</h2>
      <div>
        <span>
          <FaGraduationCap />
        </span>
        <p>
          <strong>Tecnólogo em Análise e Desenvolvimento de Sistemas</strong>
        </p>
      </div>
      <div>
        <span>
          <BsCalendarDate />
        </span>
        <p>07/2022 - Cursando</p>
      </div>
      <div>
        <span>
          <HiLocationMarker />
        </span>
        <p>Porto Alegre/RS</p>
      </div>
    </EducationElementWrapper>
  );
};

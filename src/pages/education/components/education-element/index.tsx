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
        <strong>Tecnólogo em Análise e Desenvolvimento de Sistemas</strong>
      </div>
      <div>
        <span>
          <BsCalendarDate />
        </span>
        07/2022 - Cursando
      </div>
      <div>
        <span>
          <HiLocationMarker />
        </span>
        Porto Alegre/RS
      </div>
    </EducationElementWrapper>
  );
};

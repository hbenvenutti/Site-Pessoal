import { FaSuitcase } from 'react-icons/fa';
import { BsCalendarDate, BsInfoCircle } from 'react-icons/bs';

import { ExperienceElementWrapper } from './styles';

import type { ExperienceElementProps } from '../../../../@types/providers/experience';
import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const ExperienceElement = ({ experience }: ExperienceElementProps): ReactElement => {
  // *** --- Vars --------------------------------------------------------------------------- *** //
  const { companies, description, year, title } = experience;

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <ExperienceElementWrapper>
      <h2>{title}</h2>

      <div className="item">
        <span title="Empresa">
          <FaSuitcase />
        </span>

        {companies.map(company => (
          <a
            key={company.name}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {company.name}
          </a>
        ))}
      </div>

      <div className="item">
        <span>
          <BsCalendarDate title="Ano" />
        </span>
        <p>{year}</p>
      </div>

      <div className="description">
        <span>
          <BsInfoCircle title="Descrição" />
        </span>
        <article>
          {description.map(p => (
            <p key={p}>{p}</p>
          ))}
        </article>
      </div>
    </ExperienceElementWrapper>
  );
};

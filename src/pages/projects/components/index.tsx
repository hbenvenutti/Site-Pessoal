import { techIcons, Techs } from '../../../shared/providers/tech-icons';

import { ProjectElementWrapper } from './styles';

import type { ProjectElementProps } from '../../../@types/providers/projects';
import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function ProjectElement({ project }: ProjectElementProps): ReactElement {
  // *** --- Vars ------------------------------------------------------- *** //
  const { name, description, github, image, netlify, techs } = project;

  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <ProjectElementWrapper>
      <img
        src={image}
        alt=""
      />
      <h2>{name}</h2>
      <article>{description}</article>

      <div className="tech-list">{techs.map(tech => techIcons[tech])}</div>

      <div className="links">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          title="Código fonte no Github"
        >
          {techIcons[Techs.GITHUB]}Código Fonte
        </a>
        <a
          className="see-live-button"
          href={netlify}
          target="_blank"
          rel="noopener noreferrer"
        >
          {techIcons[Techs.NETLIFY]}Veja Rodando
        </a>
      </div>
    </ProjectElementWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { ProjectElement };

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
      <div>{techs.map(tech => techIcons[tech])}</div>
      <div>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {techIcons[Techs.GITHUB]}Código Fonte
        </a>
        <a
          href={netlify}
          target="_blank"
          rel="noopener noreferrer"
        >
          {techIcons[Techs.NETLIFY]}Live
        </a>
      </div>
    </ProjectElementWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { ProjectElement };

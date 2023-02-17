import { projects } from '../../shared/providers/projects';

import { ProjectsPageWrapper } from './styles';
import { ProjectElement } from './components';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function ProjectsPage(): ReactElement {
  return (
    <ProjectsPageWrapper>
      <h1>Projetos</h1>
      {projects.map(project => (
        <ProjectElement
          key={project.name}
          project={project}
        />
      ))}
    </ProjectsPageWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { ProjectsPage };

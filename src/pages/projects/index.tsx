import { projects } from '../../shared/providers/projects';

import { ProjectsPageWrapper } from './styles';
import { ProjectElement } from './components';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function ProjectsPage(): ReactElement {
  return (
    <ProjectsPageWrapper>
      <div className="content">
        {projects.map(project => (
          <ProjectElement
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </ProjectsPageWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { ProjectsPage };

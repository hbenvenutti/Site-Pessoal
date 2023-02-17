import type { Techs } from '../../shared/providers/tech-icons';

export interface ProjectElementProps {
  project: Project;
}

export interface Project {
  name: string;
  image: string;
  github: string;
  netlify: string;
  techs: Techs[];
  description: string;
}

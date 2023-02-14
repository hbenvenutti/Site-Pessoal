export interface Experience {
  title: string;
  companies: Company[];
  year: number;
  description: string[];
}

interface Company {
  name: string;
  url: string;
}

export type Experiences = Experience[];

export interface ExperienceElementProps {
  experience: Experience;
}

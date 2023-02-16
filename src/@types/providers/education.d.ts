interface Education {
  institution: string;
  course: string;
  startDate: Date;
  finishDate: Date | 'Cursando' | 'Interrompido';
  location: string;
}

// -------------------------------------------------------------------------- //

export type EducationList = Education[];

// -------------------------------------------------------------------------- //

interface EducationElementProps {
  education: Education;
}

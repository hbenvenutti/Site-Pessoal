import type { EducationList } from '../../@types/providers/education';

// * ------------------------------------------------------------------------------------------ * //

export const educationList: EducationList = [
  {
    institution: 'Instituto Federal do Rio Grande do Sul - Campus Restinga',
    course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    startDate: new Date(2022, 6), // Month is an array index, 0 === january etc... so 6 === july.
    finishDate: 'Cursando',
    location: 'Porto Alegre/RS'
  }
];

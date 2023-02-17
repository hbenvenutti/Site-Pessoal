import type { EducationList } from '../../@types/providers/education';

// * ---------------------------------------------------------------------- * //

export const educationList: EducationList = [
  {
    institution: 'Instituto Federal do Rio Grande do Sul - Campus Restinga',
    course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    startDate: new Date(2022, 6),
    finishDate: 'Cursando',
    location: 'Porto Alegre/RS'
  },
  {
    institution: 'Instituto Federal Catarinense - Campus Araquari',
    course: 'Bacharelado em Sistemas de Informação',
    startDate: new Date(2019, 1),
    finishDate: 'Interrompido',
    location: 'Araquari/SC'
  },
  {
    institution: 'Instituto Marista Nossa Senhora das Graças',
    course: 'Ensino Médio',
    startDate: new Date(2010, 1),
    finishDate: new Date(2012, 11),
    location: 'Viamão/RS'
  }
];

/*
   ? --- Date Month Index --------------------------------------------------- // 
   ? Month is an array index -> 0 === January, 7 !== July.
   ? 6 === July.
*/

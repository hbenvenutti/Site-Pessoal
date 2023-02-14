import type { Experiences } from '../../@types/providers/experience';

export const experiences: Experiences = [
  {
    title: 'Projeto de extensão - Curso de Informática Básica',
    companies: [
      {
        name: 'Instituto Federal do Rio Grande do Sul - Campus Viamão',
        url: 'https://ifrs.edu.br/viamao/'
      }
    ],
    year: 2022,
    description: [
      'Trabalho voluntário de assistente de professor. Auxiliava e tirava as dúvidas dos alunos. O curso ensinava conceitos básicos como diretórios, nuvem e ferramentas de escritório.'
    ]
  },
  {
    title: 'Analista de Suporte - Nível 2',
    companies: [
      { name: '3 AM', url: 'https://3amit.com.br/' },
      { name: 'Sonda', url: 'https://www.sonda.com/pt' },
      { name: 'ADP', url: 'https://www.adp.com/' }
    ],
    year: 2021,
    description: [
      'Trabalhei como RPA autônomo para a empresa 3AM. A empresa entrava em contato comigo quando precisava de um técnico em campo.',
      'Através da 3AM eu pude colaborar com o time Sonda no suporte da empresa ADP Labs Porto Alegre. Foi um contrato temporário, devido ao aumento de demanda em razão da pandemia.',
      'Nessa posição eu dava suporte remoto para todos os colaboradores da ADP, trabalhando em conjunto com os times da Sonda e da própria ADP.'
    ]
  }
];

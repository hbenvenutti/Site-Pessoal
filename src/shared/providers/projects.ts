import { Techs } from './tech-icons';

const projects = [
  {
    name: 'Pokedex',
    image: 'https://i.imgur.com/SOiUgbo.png',
    github: 'https://github.com/hbenvenutti/pokedex',
    netlify: 'https://hbenvenutti-pokedex.netlify.app',
    techs: [
      Techs.REACT,
      Techs.NODE,
      Techs.VITE,
      Techs.NEST,
      Techs.MONGO,
      Techs.PRISMA,
      Techs.TYPESCRIPT,
      Techs.MOBILE
    ],
    description:
      'Aplicação de uma pokedex criada com backend e frontend separados. \
      O backend e o banco de dados estão hospedados no Railway e o front web no Netlify. \
      A aplicação é responsiva e pode ser acessada de dispositivos móveis.'
  },
  {
    name: 'Kaffee Lieferung',
    image: 'https://i.imgur.com/qXPc7sW.png',
    github: 'https://github.com/hbenvenutti/kaffee-lieferung',
    netlify: 'https://hbenvenutti-kaffee-lieferung.netlify.app/',
    techs: [Techs.REACT, Techs.VITE, Techs.TYPESCRIPT],
    description:
      'Aplicação de uma cafeteria, simula o pedido de tele-entrega, com a \
      escolha do café, formulário de endereço e checkout.'
  },
  {
    name: 'Timer',
    image: 'https://i.imgur.com/kWCwRWq.png',
    github: 'https://github.com/hbenvenutti/Ignite-Timer',
    netlify: 'https://hbenvenutti-timer.netlify.app/',
    techs: [Techs.REACT, Techs.VITE, Techs.TYPESCRIPT],
    description:
      'Aplicação para cronometrar o tempo investido em uma tarefa. \
      O usuário informa o nome da tarefa e o tempo para iniciar o cronômetro.\
      A aplicação guarda o histórico de tarefas, informando se o timer foi \
      conluído, interrompido ou está em andamento.'
  },
  {
    name: 'Todo List',
    image: 'https://i.imgur.com/bkS5D4y.png',
    github: 'https://github.com/hbenvenutti/Todo-List',
    netlify: 'https://hbenvenutti-todo-list.netlify.app/',
    techs: [Techs.REACT, Techs.VITE, Techs.TYPESCRIPT],
    description:
      'Aplicação para listar tarefas. É possível criar tarefas e marcá-las como \
       feitas.'
  },
  {
    name: 'Democratizando o Ensino',
    image: 'https://i.imgur.com/vEwthsM.png',
    github: 'https://github.com/SevenSeas-Tech/demen/',
    netlify: '#',
    techs: [
      Techs.NODE,
      Techs.POSTGRES,
      Techs.DOCKER,
      Techs.REACT,
      Techs.NEXT,
      Techs.VITE,
      Techs.TYPESCRIPT
    ],
    description:
      'Projeto de uma biblioteca gratuita de vídeo-aulas.\
      Um lugar centralizado com um banco de dados com conteúdo já postado na internet. \
      Aumentando o alcance de pequenos professores e facilitando a continuidade \
      dos estudos dos alunos.'
  },
  {
    name: 'Biblioteca',
    image: 'https://i.imgur.com/O63pR8L.png',
    github: 'https://github.com/hbenvenutti/biblioteca-front',
    netlify: 'https://hbenvenutti-library.netlify.app/',
    techs: [Techs.REACT, Techs.VITE, Techs.TYPESCRIPT, Techs.NODE],
    description:
      'Aplicação de um biblioteca. O backend foi feito com Express, \
       O banco de dados utilizado foi o Firestore hospedado no Firebase. \
       É possível criar, editar, ler e remover os livros do banco de dados. \
       Foi implementado um sistema de autenticação e registro usuários. \
       Também foi implementada a verificação dos dados, como tamanho de senha.'
  },
  {
    name: 'Site Pessoal',
    image: 'https://i.imgur.com/u6NzVY0.png',
    github: 'https://github.com/hbenvenutti/Site-Pessoal',
    netlify: 'https://hbenvenutti.netlify.app/',
    techs: [Techs.REACT, Techs.VITE, Techs.TYPESCRIPT, Techs.MOBILE],
    description:
      'Meu site pessoal, esse próprio site. Eu o desenvolvi sozinho. \
      Serve como currículo e portifólio.'
  }
];

// * ---------------------------------------------------------------------- * //

export { projects };

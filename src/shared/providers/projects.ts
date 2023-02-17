import { Techs } from './tech-icons';

const projects = [
  {
    name: 'Pokedex',
    image: 'https://i.imgur.com/SOiUgbo.png',
    github: 'https://github.com/hbenvenutti/pokedex',
    netlify: 'https://hbenvenutti-pokedex.netlify.app',
    techs: [Techs.REACT, Techs.NODE, Techs.VITE, Techs.NEST, Techs.MONGO, Techs.TYPESCRIPT],
    description:
      'Aplicação de uma pokedex criada com backend e frontend separados. \
      O backend e o banco de dados estão hospedados no Railway e o front web no Netlify. \
      A aplicação é responsiva e pode ser acessada de dispositivos móveis.'
  }
];

// * ---------------------------------------------------------------------- * //

export { projects };

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
    name: ' Kaffee Lieferung',
    image: 'https://i.imgur.com/qXPc7sW.png',
    github: 'https://github.com/hbenvenutti/kaffee-lieferung',
    netlify: 'https://hbenvenutti-kaffee-lieferung.netlify.app/',
    techs: [Techs.REACT, Techs.VITE, Techs.TYPESCRIPT],
    description:
      'Aplicação de uma cafeteria, simula o pedido de tele-entrega, com a \
      escolha do café, formulário de endereço e checkout.'
  }
];

// * ---------------------------------------------------------------------- * //

export { projects };

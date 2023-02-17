import { BsGithub } from 'react-icons/bs';
import {
  FaCss3,
  FaDocker,
  FaGit,
  FaHtml5,
  FaLinux,
  FaNodeJs,
  FaReact,
  FaUbuntu
} from 'react-icons/fa';
import {
  SiDeno,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
  SiVite
} from 'react-icons/si';

// * ---------------------------------------------------------------------- * //

export enum Techs {
  REACT = 'react',
  NODE = 'node',
  VITE = 'vite',
  NEST = 'nest',
  POSTGRES = 'postgres',
  MONGO = 'mongo',
  PRISMA = 'prisma',
  TYPESCRIPT = 'typescript',

  GITHUB = 'github',
  NETLIFY = 'netlify'
}

// -------------------------------------------------------------------------- //

const techIcons = {
  github: <BsGithub />,
  netlify: <SiNetlify />,
  git: <FaGit />,

  typescript: <SiTypescript />,
  javascript: <SiJavascript />,

  react: <FaReact />,
  node: <FaNodeJs />,
  deno: <SiDeno />,

  next: <SiNextdotjs />,
  nest: <SiNestjs />,
  vite: <SiVite />,

  postgres: <SiPostgresql />,
  mongo: <SiMongodb />,
  prisma: <SiPrisma />,

  docker: <FaDocker />,

  linux: <FaLinux />,
  ubuntu: <FaUbuntu />,

  html: <FaHtml5 />,
  css: <FaCss3 />
};

// * ---------------------------------------------------------------------- * //

export { techIcons };

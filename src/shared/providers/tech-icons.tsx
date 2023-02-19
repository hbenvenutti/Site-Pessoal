import { AiFillAndroid } from 'react-icons/ai';
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
  NETLIFY = 'netlify',
  MOBILE = 'mobile'
}

// -------------------------------------------------------------------------- //

const techIcons = {
  github: <BsGithub />,
  netlify: <SiNetlify />,
  git: <FaGit />,

  typescript: (
    <SiTypescript
      title="Typescript"
      key="typescript"
    />
  ),
  javascript: (
    <SiJavascript
      title="Javascript"
      key="javascript"
    />
  ),

  react: (
    <FaReact
      title="React"
      key="react"
    />
  ),
  node: (
    <FaNodeJs
      title="Node"
      key="node"
    />
  ),
  deno: (
    <SiDeno
      title="Deno"
      key="deno"
    />
  ),

  next: (
    <SiNextdotjs
      title="Next.js"
      key="next"
    />
  ),
  nest: (
    <SiNestjs
      title="Nest.js"
      key="nest"
    />
  ),
  vite: (
    <SiVite
      title="Vite"
      key="vite"
    />
  ),

  postgres: (
    <SiPostgresql
      title="PostgreSQL"
      key="postgres"
    />
  ),
  mongo: (
    <SiMongodb
      title="MongoDB"
      key="mongo"
    />
  ),
  prisma: (
    <SiPrisma
      title="Prisma ORM"
      key="prisma"
    />
  ),

  docker: (
    <FaDocker
      title="Docker"
      key="docker"
    />
  ),

  linux: (
    <FaLinux
      title="Linux"
      key="linux"
    />
  ),
  ubuntu: (
    <FaUbuntu
      title="Ubuntu"
      key="ubuntu"
    />
  ),

  html: (
    <FaHtml5
      title="HTML5"
      key="html"
    />
  ),
  css: (
    <FaCss3
      title="CSS3"
      key="css"
    />
  ),
  mobile: (
    <AiFillAndroid
      title="Mobile"
      key="mobile"
    />
  )
};

// * ---------------------------------------------------------------------- * //

export { techIcons };

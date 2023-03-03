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
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
  SiVite
} from 'react-icons/si';
import { useTranslation } from 'react-i18next';

import { TechCardWrapper } from './styles';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function TechCard(): ReactElement {
  // *** --- Contexts --------------------------------------------------- *** //
  const { t } = useTranslation();

  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <TechCardWrapper>
      <h3>{t('aside.techTitle', { ns: 'common' })}</h3>

      <div>
        <FaNodeJs title="Node.JS" />
        <FaReact title="React.JS" />
        <SiTypescript title="Typescript" />
        <SiJavascript title="Javascript" />
        <SiPostgresql title="PostgreSQL" />
        <SiMongodb title="MongoDB" />
        <FaDocker title="Docker" />
        <SiPrisma title="Prisma ORM" />
        <SiVite title="Vite" />
        <SiNestjs title="Nest.JS" />
        <FaLinux title="Linux Distros" />
        <FaUbuntu title="Ubuntu" />
        <FaHtml5 title="HTML 5" />
        <FaCss3 title="CSS 3" />
        <SiDeno title="Deno" />
        <SiNextdotjs title="Next.JS" />
        <FaGit title="Git" />
      </div>
    </TechCardWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { TechCard };

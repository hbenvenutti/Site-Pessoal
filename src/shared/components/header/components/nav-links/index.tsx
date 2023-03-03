import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useMobileMenu } from '../../../../hooks/mobile-menu-context';

import { NavLinksWrapper } from './styles';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function NavLinks(): ReactElement {
  // *** --- Contexts --------------------------------------------------- *** //
  const { closeMobileMenu } = useMobileMenu();
  const { t } = useTranslation();

  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <NavLinksWrapper>
      <NavLink
        onClick={closeMobileMenu}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        onClick={closeMobileMenu}
        to="/about"
      >
        {t('header.about', { ns: 'common' })}
      </NavLink>
      <NavLink
        onClick={closeMobileMenu}
        to="/projects"
      >
        {t('header.projects', { ns: 'common' })}
      </NavLink>
      <NavLink
        onClick={closeMobileMenu}
        to="/education"
      >
        {t('header.education', { ns: 'common' })}
      </NavLink>
      <NavLink
        onClick={closeMobileMenu}
        to="/experience"
      >
        {t('header.experience', { ns: 'common' })}
      </NavLink>
      <NavLink
        onClick={closeMobileMenu}
        to="/certificates"
      >
        {t('header.certificates', { ns: 'common' })}
      </NavLink>
    </NavLinksWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { NavLinks };

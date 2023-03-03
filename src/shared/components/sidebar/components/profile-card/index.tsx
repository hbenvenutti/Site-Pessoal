import { useTranslation } from 'react-i18next';

import { ProfileCardWrapper } from './styles';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function ProfileCard(): ReactElement {
  // *** --- Contexts --------------------------------------------------- *** //
  const { t } = useTranslation();

  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <ProfileCardWrapper>
      <img
        src="https://github.com/hbenvenutti.png"
        alt="Foto de Huam Benvenutti"
      />

      <div className="name-wrapper">
        <strong>Huam Benvenutti</strong>
        <span>{t('aside.position', { ns: 'common' })}</span>
      </div>
    </ProfileCardWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { ProfileCard };

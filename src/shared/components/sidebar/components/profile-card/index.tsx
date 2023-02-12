import { ProfileCardWrapper } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const ProfileCard = (): ReactElement => (
  <ProfileCardWrapper>
    <img
      src="https://github.com/hbenvenutti.png"
      alt="Foto de Huam Benvenutti"
    />

    <div className="name-wrapper">
      <strong>Huam Benvenutti</strong>
      <span>Full Stack Developer</span>
    </div>
  </ProfileCardWrapper>
);

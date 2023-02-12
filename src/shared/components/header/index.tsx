import { NavLink } from 'react-router-dom';

import logo from '../../../assets/logo.png';

import { HeaderWrapper } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const Header = (): ReactElement => (
  <HeaderWrapper>
    <div>
      <img
        src={logo}
        alt="Logo: HB escrito como uma tag HTML fechada em sí mesma"
      />
      <h2>HBenvenutti</h2>
    </div>
    <div>
      <NavLink to="/certificates">Certificados</NavLink>
      <NavLink to="/">Projetos</NavLink>
    </div>
  </HeaderWrapper>
);

import { SidebarWrapper } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const Sidebar = (): ReactElement => (
  <SidebarWrapper>
    <div>
      <img src="https://github.com/hbenvenutti.png" alt="foto de Huam Benvenutti" />

      <div className="name-wrapper">
        <strong>Huam Benvenutti</strong>
        <span>Full Stack Developer</span>
      </div>
    </div>
  </SidebarWrapper>
);

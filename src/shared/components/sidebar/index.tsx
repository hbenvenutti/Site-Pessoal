import { SidebarWrapper } from './styles';
import { LinksCard } from './components/links-card';
import { ProfileCard } from './components/profile-card';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const Sidebar = (): ReactElement => (
  <SidebarWrapper>
    <ProfileCard />
    <LinksCard />
  </SidebarWrapper>
);

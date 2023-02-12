import { SidebarWrapper } from './styles';
import { LinksCard } from './components/links-card';
import { ProfileCard } from './components/profile-card';
import { TechCard } from './components/tech-card';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const Sidebar = (): ReactElement => (
  <SidebarWrapper>
    <ProfileCard />
    <LinksCard />
    <TechCard />
  </SidebarWrapper>
);

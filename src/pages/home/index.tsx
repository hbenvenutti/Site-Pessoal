import { IoIosConstruct } from 'react-icons/io';

import { HomePageWrapper } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const HomePage = (): ReactElement => (
  <HomePageWrapper>
    <h1>home page</h1>
    <div>
      <IoIosConstruct style={{ width: 200, height: 'auto' }} />
      <h1>Under Construction</h1>
    </div>
  </HomePageWrapper>
);

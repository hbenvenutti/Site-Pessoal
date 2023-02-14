import { createContext, useContext, useState } from 'react';

import type {
  MobileMenuContextData,
  MobileMenuContextProps
} from '../../../@types/hooks/mobile-menu-context';
import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

const MobileMenuContext = createContext<MobileMenuContextData>({} as MobileMenuContextData);

// ---------------------------------------------------------------------------------------------- //

export const MobileMenuProvider = ({ children }: MobileMenuContextProps): ReactElement => {
  // *** --- States ------------------------------------------------------------------------- *** //
  const [isMobileMenuOpen, setMobileMenu] = useState<boolean>(false);

  // *** --- Functions ---------------------------------------------------------------------- *** //
  const changeMenuState = (): void => {
    setMobileMenu(state => !state);
  };

  // -------------------------------------------------------------------------------------------- //

  const closeMobileMenu = (): void => {
    setMobileMenu(false);
  };

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <MobileMenuContext.Provider value={{ isMobileMenuOpen, changeMenuState, closeMobileMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

// ---------------------------------------------------------------------------------------------- //

export const useMobileMenu = (): MobileMenuContextData => useContext(MobileMenuContext);

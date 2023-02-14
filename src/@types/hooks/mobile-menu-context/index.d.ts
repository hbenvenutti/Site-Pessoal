import type { ReactNode } from 'react';

// * ------------------------------------------------------------------------------------------ * //

interface MobileMenuContextData {
  isMobileMenuOpen: boolean;
  changeMenuState: () => void;
  closeMobileMenu: () => void;
}

interface MobileMenuContextProps {
  children: ReactNode;
}

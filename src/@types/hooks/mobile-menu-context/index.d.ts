import type { ReactNode } from 'react';

// * ------------------------------------------------------------------------------------------ * //

interface MobileMenuContextData {
  isMobileMenuOpen: boolean;
  changeMenuState: () => void;
}

interface MobileMenuContextProps {
  children: ReactNode;
}

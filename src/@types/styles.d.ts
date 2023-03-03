import 'styled-components';
import type { lightTheme } from '../shared/styles/themes/light';

// * ------------------------------------------------------------------------------------------ * //

export type ThemeType = typeof lightTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}

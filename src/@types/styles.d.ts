import 'styled-components';
import type { defaultTheme } from '../shared/styles/themes/default';

// * ------------------------------------------------------------------------------------------ * //

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}

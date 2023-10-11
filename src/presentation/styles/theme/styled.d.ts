import 'styled-components';

import { defaultTheme } from './default';

export type Theme = typeof defaultTheme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}


import 'styled-Component'

import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  type DefaultTheme = ThemeType;
}
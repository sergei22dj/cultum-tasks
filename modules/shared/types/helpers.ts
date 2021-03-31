import { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

export type StyledCss = FlattenInterpolation<ThemeProps<DefaultTheme>>;

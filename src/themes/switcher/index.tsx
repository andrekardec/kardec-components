import React, { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyles from '../global';

export interface CustomThemeProps {
  children?: ReactNode;
  theme: DefaultTheme;
}

const ThemeProvider: React.FC<CustomThemeProps> = ({ children, theme }) => (
  <StyledThemeProvider theme={theme}>
    { children }
    <GlobalStyles />
  </StyledThemeProvider>
);

export default ThemeProvider;

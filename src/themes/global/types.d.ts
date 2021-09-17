import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
    title: string,
    background: string,
    colors: {
        blue: {
          primary: string,
          dark: string,
          darker: string,
          darkest: string,
        },
        neutral: {
          lightest: string,
          lighter: string,
          light: string,
          medium: string,
          dark: string,
          darker: string,
          darkest: string,
        },
        red: {
          light: string,
          dark: string,
        },
        success: {
          light: string,
          dark: string,
        },
        error: {
          light: string,
          dark: string,
        },
        alert: {
          light: string,
          dark: string,
        },
        information: {
          light: string,
          dark: string,
        },
        gradient: {
          blue: string,
          red: string,
        },
      },
      shadow: {
        25: string;
      }
    }
}

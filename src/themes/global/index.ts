import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`   
    * {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Open Sans', sans-serif;
  }

  body{
    font-family: 'Open Sans', sans-serif;
    background-color: ${(props) => props.theme.background};
  }
`;

export default GlobalStyles;

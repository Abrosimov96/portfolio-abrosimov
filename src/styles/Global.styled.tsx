import { createGlobalStyle } from 'styled-components';
import { myTheme } from './Theme.styled';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${myTheme.colors.grey.dark};
    line-height: 1.2;
    background-color: ${myTheme.colors.primary};
  }

  a{
    color: ${myTheme.colors.grey.dark};
    text-decoration: none;
    cursor: pointer;
  }

  ul{
    list-style: none;
  }

  button{
    background-color: unset;
    border: none;
  }

`;

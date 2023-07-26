// GlobalStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --foreground-rgb: 0, 0, 0;
    --background-start-rgb: 214, 219, 220;
    --background-end-rgb: 255, 255, 255;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --foreground-rgb: 255, 255, 255;
      --background-start-rgb: 0, 0, 0;
      --background-end-rgb: 0, 0, 0;
    }
  }

  body {
    color: rgb(var(--foreground-rgb));
    background: url('/home.png') no-repeat center center fixed;
    background-size: cover;
    margin: 0% 20%;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  code {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  h4 {
    font-size: 1rem;
    color: rgb(58, 57, 57);
  }

  h3 {
    font-size: 1.5rem;
    color: rgb(58, 57, 57);
    line-height: 2.5rem;
    margin: 2rem 0rem;
  }

  a {
    color: rgb(58, 57, 57);
  }
`;

export default GlobalStyles;

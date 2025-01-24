import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Ciutadella Regular';
    src: url('../../../public/fonts/Ciutadella Regular.ttf');
  }

  @font-face {
    font-family: 'Ciutadella Bold';
    src: url('../../../public/fonts/Ciutadella Bold.ttf');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
    font-family: 'Ciutadella Regular';
  }

  body{
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
  }
`;
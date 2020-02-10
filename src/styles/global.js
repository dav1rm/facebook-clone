import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: #e9ebee;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
    color: #1c1e21;
  }

  button {
    cursor: pointer;
  }
`;

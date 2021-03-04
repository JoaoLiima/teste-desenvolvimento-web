import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:0;
  }

  body, html, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  #root {
    height: inherit;
    margin: 0 auto;
  }

  .App {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

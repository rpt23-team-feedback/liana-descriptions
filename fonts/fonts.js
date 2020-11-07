import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Sofia Pro';
    src: url('./sofiapro-light.woff') format('woff');
  }
  @font-face {
    font-family: 'Sofia Pro Bold';
    src: url('./sofia-pro-bold.ttf') format('ttf');
  }
`;
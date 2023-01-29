import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};  
  
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }
  
  *, :after, :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }
  
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: break-word;
    tab-size: 4;
  }
  
  html, body, #__next {
    height: 100%;
    font-family: "Roboto", sans-serif;
  }
  
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  
  button {
    background: none;
    border: 0;
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
    color: black;
  }

  a:hover {    
    color: black;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }  

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default GlobalStyles;

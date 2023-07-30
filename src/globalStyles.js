import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Kanit', sans-serif;
  } 
  input[type="radio"] {
    display:none;
  }
  body{
    background-color:#f6f6f6;
  }
  .sort{
    background-color:transparent;
    border:none;
    border-radius:5;
    flex-direction:row;
  }
`;
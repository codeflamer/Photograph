import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --mainBg:hsl(180, 52%, 96%);
        --textPrimary:hsl(180, 29%, 50%);
        --textSec:hsl(180, 29%, 50%);
    }   
    *{
        box-sizing:border-box;
        margin: 0;
        padding: 0;
    }
  body {
    box-sizing:border-box;
    /* background: var(--mainBg); */
    font-family: 'Roboto Slab', serif;
    font-size:15px;
    /* color:var(--textColor); */
    
  }
  /* a{
      color:var(--text-color);
      text-decoration:none;
      &:hover{
        text-decoration:underline;
      }
  } */
`;
 
export default GlobalStyle;
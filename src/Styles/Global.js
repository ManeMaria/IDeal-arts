import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyles = createGlobalStyle`
  
    *{
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;

    }
    html{
        scroll-behavior: smooth;
    }

    html, body , #root{
        height: 100%;
        
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-family: 'Spartan', sans-serif;
        
    }

    input , button, a{
        font-family: 'Spartan', sans-serif;
    }
    
`;
export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
    }
    body {
        background-color: #8C11BE;
    }
    p, h2 {
        font-weight: 400;
        font-family: 'Raleway', sans-serif;
    }
    a {
        text-decoration: none;
    }
    button {
        cursor: pointer;
        border: none;
        background-color: #FFFFFF;
    }
    `;

export default GlobalStyles;
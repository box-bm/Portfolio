import { createGlobalStyle } from "styled-components";

export { default as darkTheme } from "./darkTheme";
export { default as lightTheme } from "./lightTheme";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-size: 
    }
    html {
        line-height: 1.15; 
        -webkit-text-size-adjust: 100%; 
    }
    body {
        background-color: ${({ theme }) => theme.backgroundColor};
        font-family: ${({ theme }) => theme.fonts.fontFamily};
        transition: all 0.2s linear;
        margin: 0;
    }
    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }

    [hidden] {
        display: none;
    }
`;

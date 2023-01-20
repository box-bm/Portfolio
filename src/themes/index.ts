import { createGlobalStyle } from "styled-components";

export { default as darkTheme } from "./darkTheme";
export { default as lightTheme } from "./lightTheme";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
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
        color: ${({ theme }) => theme.fonts.color};
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    [hidden] {
        display: none;
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {}
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {}
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {}
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {}
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {}
`;

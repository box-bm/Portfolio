import { createGlobalStyle } from "styled-components";

export { default as darkTheme } from "./darkTheme";
export { default as lightTheme } from "./lightTheme";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
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

    h1 {
        font-size: 4rem;
    }
    h2 {
        font-size: 3rem;
    }
    h3 {
        font-size: 2.75rem;
    }
    h4 {
        font-size: 2.5rem;
    }
    h5 {
        font-size: 2.25rem;
    }
    h6 {
        font-size: 2rem;
    }
    body {
        font-size: 1.6rem;
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

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body{
    background-color: white;
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    font-size: 30px;
    user-select: none;
}

@media screen and (min-width: 320px) and (max-width: 480px) {
    body{
        font-size: 25px;
    }
}

*{
    user-select: none;
    outline: none;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
}

.title{
    font-size: 50px;
    font-weight: bold;
}
`;

export default GlobalStyles;

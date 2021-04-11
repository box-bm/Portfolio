import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');
body{
    background-color: white;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica;
    font-size: 30px;
    user-select: none;
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
.content {
    margin: 0px 140px;
}
`;

export default GlobalStyles;

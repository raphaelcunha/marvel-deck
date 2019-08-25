import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap');

    input:focus, textarea:focus, select:focus{
        outline: none;
    }

    body {
        background-color: #f2f2f2;
        margin: 0;
        font-family: 'Lexend Deca', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{

        --color-white: #F4F4F4;
        --color-white-dark: #EDEDED;
        --color-red: #D64B22;
        --color-black: #222222;
        --color-black-light: #1c1c1c;
        --color-grey-dark: #454545;
        --color-grey-light: #b5b5b5;
        --color-grey: #989898;
        --color-orange: #ffc800;

        --fs-small:1rem;
        --fs-medium:1.2rem;
        --fs-big:1.6rem;
        --fs-large:2.2rem;
        --fs-xlarge:3.1rem;

        font-family: 'Red Hat Display', sans-serif;
        font-size:100%;
        color:var(--color-black);
    }

    *, *::before, *::after{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Red Hat Display', sans-serif;
        font-size:100%;
        line-height:1;
    }

    body{
        background:var(--color-white-dark);
    }

    ul, ol{
        list-style:none;
    }

    button{
        cursor:pointer;
    }
`;

export default GlobalStyle;
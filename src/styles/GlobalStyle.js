import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{

        --color-white: #ffffff;
        --color-white-dark: #f7f7f7;
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
        --fs-xlarge:2.6rem;

        font-family: 'Poppins', sans-serif;
        font-size:100%;
        color:var(--color-grey-dark);

        @media(min-width:400px){
            --fs-xlarge:3rem;
        }
    }

    *, *::before, *::after{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-size:100%;
        line-height:1;
    }

    body{
        background:var(--color-white-dark);
    }

    h1,h2,h3,h4,h5,h6{
        font-weight:700;
        color:var(--color-black);
    }

    ul, ol{
        list-style:none;
    }

    button{
        cursor:pointer;
    }
`;

export default GlobalStyle;
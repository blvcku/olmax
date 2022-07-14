import styled from "styled-components";

export const FooterContainer = styled.footer`
    display:grid;
    padding:3rem 1rem;
    row-gap:1.2rem;
    background:var(--color-black-light);
    color:var(--color-grey-light);
    font-size:var(--fs-medium);
    a{
        color:var(--color-grey-light);
        font-weight:500;
        transition:color .3s ease;
        svg{
            display:block;
        }
        &:hover{
            color:var(--color-orange);
        }
    }
    & > p{
        order:3;
        text-align:center;
    }
    div{
        justify-content:center;
        display:flex;
        flex:1;
        align-items:center;
    }
    div:nth-child(2){
        flex-direction:column;
        gap:.5rem;
    }
    div:nth-child(3){
        gap:.8rem;
    }
    @media(min-width:360px){
        div:nth-child(2){
            flex-direction:row;
            gap:1rem;
        }
    }
    @media(min-width:560px){
        grid-template-columns:repeat(2, auto);
        & > p{
            grid-column:span 2;
        }
    }
    @media(min-width:1000px){
        padding:5.5rem 0;
        display:flex;
        gap:0;
        & > p{
            order:0;
            flex:1;
            display:flex;
            justify-content:center;
            align-items:center;
            margin-right:auto;
        }
        div:nth-child(3){
            margin-left:auto;
        }
    }
`;
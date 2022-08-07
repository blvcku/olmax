import styled from "styled-components";

export const ArticleBodyContainer = styled.section`
    padding-inline:1rem;
    background:var(--color-white);
`;

export const ArticleBodyWrapper = styled.div`
    --elementShift: -4rem;
    padding: 1.5rem 1rem 3rem 1rem;
    max-width:1350px;
    background:var(--color-white);
    margin-inline:auto;
    transform:translateY(var(--elementShift));
    margin-bottom:var(--elementShift);
    @media(min-width:700px){
        --elementShift: -6rem;
        padding: 3rem 2.5rem;
    }
    @media(min-width:1000px){
        padding: 3rem 2.5rem 7rem 2.5rem;
    }
`;

export const Header = styled.header`
    padding-bottom:1.5rem;
    border-bottom:2px solid var(--color-grey-light);
    & > p:nth-child(1){
        color:var(--color-orange);
        text-transform:uppercase;
        font-size:var(--fs-medium);
        font-weight:500;
    }
    & > p:nth-child(3){
        font-size:var(--fs-medium);
        margin-top:.7rem;
        max-width:70ch;
        line-height:1.33;
    }
    & > h1{
        margin-top:.7rem;
        color:var(--color-black);
        font-weight:700;
        font-size:var(--fs-large);
    }
    @media(min-width:700px){
        & > h1{
            font-size:var(--fs-xlarge);
        }
    }
`;

export const ArticleContentContainer = styled.article`
    --gap:.5rem;
    margin-top:2.5rem;
    font-size:var(--fs-medium);
    p{
        line-height:1.33;
    }
    p:not(:last-child){
        margin-bottom:calc(2 * var(--gap));
    }
    h2,h3,h4,h5{
        &:not(:last-child){
            margin-bottom:var(--gap);
        }
    }
    h2{
        font-size:var(--fs-large);
    }
    h3{
        font-size:var(--fs-big);
    }
    h4, h5{
        font-size:var(-fs-medium);
    }
    h5{
        color:var(--color-grey-dark);
    }
    ul,ol{
        padding-left:2.5rem;
        &:not(:last-child){
            margin-bottom:calc(2 * var(--gap));
            margin-top:calc(2 * var(--gap));
        }
    }
    ul{
        list-style:disc;
    }
    ol{
        list-style:decimal;
    }
    li p{
        margin-bottom:0;
    }
    blockquote{
        padding-left:1.5rem;
        position:relative;
        &::before{
            content:'';
            position:absolute;
            top:0;
            left:0;
            height:100%;
            width:.25rem;
            background:var(--color-grey-dark);
        }
    }
`;

export const ArticleImageWrapper = styled.div`
    margin-top:calc(4 * var(--gap));
    img{
        max-width:100%;
    }
    &:not(:last-child){
        margin-bottom:calc(4 * var(--gap));
    }
`;
import styled from "styled-components";
import { TextUnderline } from '../../../styles/Mixins';

export const NewsListContainer = styled.section`
    padding:8rem 0 7rem; ${/* -1rem on bottom because of bottom padding on NewsContainer */''}
    & > h2{
        font-size:var(--fs-xlarge);
        font-weight:700;
        text-align:center;
        padding-inline:1rem;
        ${TextUnderline}
        &::before{
            left:50%;
            transform:translateX(-50%);
        }
    }
    & > p{
        padding-inline:1rem;
        font-size:var(--fs-medium);
        text-align:center;
        max-width:50ch;
        margin-top:.9rem;
        margin-inline:auto;
    }
    & > div{
        position:relative;
        max-width:1420px;
        margin-inline:auto;
    }
    @media(min-width:630px){
        div{
            padding-inline:1rem;
        }
    }
`;

export const NewsContainer = styled.ul`
    --gap: 3rem;
    --visible-columns:1;
    margin-top:3rem; ${/* +1rem from padding top */''}
    padding:1rem 0; ${/* padding to make sure that box shadow is visible on list items */''}
    display:grid;
    grid-auto-flow:column;
    grid-auto-columns:calc(100% / var(--visible-columns));
    overflow-x:auto;
    @media(min-width:630px){
        --visible-columns:2;
        overflow:hidden;
    }
    @media(min-width:950px){
        --visible-columns:3;
    }
`;

export const NewsListItem = styled.li`
    box-shadow: 0px 3px 6px #00000066;
    margin-inline:calc(var(--gap) / 2);
    background:var(--color-white);
    height:max-content;
    & > a{
        overflow:hidden;
        display:block;
        &:hover{
            img{
                transform:scale(1.06);
            }
        }
    }
    img{
        display:block;
        width:100%;
        aspect-ratio:16/10.5;
        object-fit:cover;
        transition:transform .6s ease;
    }
    div{
        padding:1.5rem 1.4rem;
    }
    h3{
        margin-top:.55rem;
        word-break:break-word;
        a{
            font-size:var(--fs-big);
            font-weight:700;
            text-decoration:none;
            color:var(--color-black);
            transition:color .3s ease;
            &:hover{
                color:var(--color-orange);
            }
        }
    }
    p{
        font-size:var(--fs-small);
        line-height:1.33;
        word-break:break-word;
    }
    p:nth-of-type(1){
        color:var(--color-orange);
        font-weight:500;
    }
    p:nth-of-type(2){
        margin-top:.55rem;
    }
`;

export const NextButton = styled.button`
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    right:0;
    display:none;
    width:max-content;
    background:none;
    border:none;
    img{
        display:block;
        width:2.2rem;
        height:auto;
    }
    @media(min-width:630px){
        display:block;
    }
`;

export const PrevButton = styled(NextButton)`
    left:0;
    img{
        transform: scaleX(-1);
    }
`;
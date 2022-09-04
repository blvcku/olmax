import styled from "styled-components";
import { TextUnderline } from '../../../styles/Mixins';

export const ArticlesListContainer = styled.section`
    padding:3rem 0 2rem; ${/* -1rem on bottom because of bottom padding on NewsContainer */''}
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
        line-height:1.33;
    }
    & > div{
        position:relative;
        max-width:1500px;
        margin-inline:auto;
        @media(hover: hover) and (pointer:fine){
            &:hover{
                & > button{
                    opacity:1;
                }
            }
        }
    }
    @media(min-width:650px){
        padding:8rem 0 7rem; ${/* -1rem on bottom because of bottom padding on NewsContainer */''}
        & > div{
            padding-inline:2.2rem;
            & > div{
                overflow:hidden;
            }
        }
    }
`;

export const ArticlesListWrapper = styled.ul`
    --gap: 2.6rem;
    --visible-columns:1;
    transition:transform .3s cubic-bezier(0.65,0.05,0.36,1);;
    margin-top:1rem; ${/* +1rem from padding top */''}
    padding:1rem 0; ${/* padding to make sure that box shadow is visible on list items */''}
    display:grid;
    grid-auto-flow:column;
    overflow-x:auto;
    grid-auto-columns:calc(100% / var(--visible-columns));
    @media(min-width:650px){
        --visible-columns:2;
        overflow:visible;
        transform:translateX(${({currentVisibleArticle}) => `calc(${currentVisibleArticle} / var(--visible-columns) * 100% * -1)`});
    }
    @media(min-width:1000px){
        --visible-columns:3;
        margin-top:3rem; ${/* +1rem from padding top */''}
    }
`;

export const ArticleContainer = styled.li`
    box-shadow: 0px 2px 4px #00000066;
    margin-inline:calc(var(--gap) / 2);
    background:var(--color-white);
    height:max-content;
    & > a{
        overflow:hidden;
        display:block;
        div{
            transition:transform .6s ease;
        }
        &:hover{
            div{
                transform:scale(1.06);
            }
        }
    }
    img{
        display:block;
        width:100%;
        aspect-ratio:16/10.6;
        object-fit:cover;
    }
    & > div{
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
        text-transform:uppercase;
    }
    p:nth-of-type(2){
        margin-top:.55rem;
    }
`;

export const NextButton = styled.button`
    position:absolute;
    top:40%;
    right:0;
    display:none;
    width:max-content;
    background:none;
    border:none;
    transition:opacity .4s ease;
    img{
        display:block;
        width:2.2rem;
        height:auto;
    }
    @media(min-width:650px){
        display:block;
    }
    @media(hover: hover) and (pointer:fine){
        opacity:0;
    }
    &:disabled{
        display:none;
    }
`;

export const PrevButton = styled(NextButton)`
    left:0;
    img{
        transform: scaleX(-1);
    }
`;
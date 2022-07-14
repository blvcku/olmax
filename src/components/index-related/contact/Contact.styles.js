import styled from "styled-components";
import { TextUnderline } from '../../../styles/Mixins';

export const ContactContainer = styled.section`
    --padding-inline:1rem;
    padding:3rem var(--padding-inline);
    max-width:calc(1300px + 2 * var(--padding-inline));
    margin-inline:auto;
    & > div{
        margin-bottom:1.5rem;
        h2{
            font-size:var(--fs-large);
            color:var(--color-black);
            font-weight:700;
            text-align:center;
            ${TextUnderline}
            &::before{
                left:50%;
                transform:translateX(-50%);
            }
        }
        & > p{
            font-size:var(--fs-medium);
            margin-top:1rem;
            text-align:center;
            line-height:1.33;
        }
        address{
            display:flex;
            gap:2rem;
            font-style:normal;
            margin-top:1.5rem;
            justify-content:center;
            & > p{
                font-size:var(--fs-small);
                font-weight:500;
                line-height:1.33;
            }
        }
    }
    @media(min-width:600px){
        & > div{
            h2{
                text-align:start;
                &::before{
                    left:0;
                    transform:none;
                }
            }
            & > p{
                text-align:start;
            }
            address{
                justify-content:start;
            }
        }
    }
    @media(min-width:660px){
        grid-template-columns:repeat(2, 1fr);
        gap:4rem;
        align-items:center;
        display:grid;
        & > div{
            margin-bottom:3rem;
        }
    }
    @media(min-width:1080px){
        padding:9rem var(--padding-inline);
    }
`;

export const ContactForm = styled.form`
    display:grid;
    column-gap:3rem;
    row-gap:.25rem;
    button{
        margin-top:.2rem;
    }
    @media(min-width:1080px){
        grid-template-columns:repeat(2, 1fr);
        label:nth-child(3){
            order:2;
        }
        button, label:nth-child(5){
            grid-column:span 2;
            order:2;
        }
    }
`;
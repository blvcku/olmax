import styled from "styled-components";
import { TextUnderline } from '../../../styles/Mixins';

export const QuestionsContainer = styled.section`
    padding:3rem 1rem;
    background:var(--color-white);
    h2{
        font-size:var(--fs-large);
        text-align:center;
        max-width:25ch;
        margin-inline:auto;
        ${TextUnderline}
        &::before{
            left:50%;
            transform:translateX(-50%);
        }
    }
    @media(min-width:1000px){
        padding:6rem 1rem;
    }
`;

export const QuestionsList = styled.ul`
    margin-inline:auto;
    margin-top:3rem;
    max-width:500px;
    display:grid;
    gap:2rem;
    li{
        border-bottom:2px solid var(--color-grey-light);
        padding-bottom:1.8rem;
    }
    details{
        --line-width:.87rem;
        --line-thickness:.11rem;
        --gap:.9rem;
        --left-spacing: calc(var(--gap) + var(--line-width));
        font-size:var(--fs-medium);
        color:var(--color-grey);
        summary{
            transition:color .3s ease;
            font-weight:500;
            cursor:pointer;
            position:relative;
            padding-left:var(--left-spacing);
            user-select:none;
            &::marker{
                content:'';
                display:none;
            }
            &::before, &::after{
                content:'';
                position:absolute;
                width:var(--line-width);
                height:var(--line-thickness);
                background:var(--color-grey);
                left:0;
                top:50%;
                transform:translateY(-50%);
            }
            &::after{
                transform:translateY(-50%) rotate(90deg); 
            }
        }
        p{
            margin-top:.5rem;
            margin-left:var(--left-spacing);
            font-size:var(--fs-small);
            color:var(--color-grey-dark);
            line-height:1.33;
        }
        &[open]{
            color:var(--color-black);
            summary{
                &::after{
                    opacity:0;
                }
                &::before{
                    background:var(--color-red);
                }
            }
        }
    }
`;
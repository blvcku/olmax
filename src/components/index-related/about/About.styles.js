import styled from "styled-components";
import { TextUnderline } from '../../../styles/Mixins';

export const AboutContainer = styled.section`
    overflow:hidden;
    position:relative;
    background:var(--color-white-dark);
`;

export const AboutWrapper = styled.div`
    max-width:1350px;
    margin-inline:auto;
    padding-inline:1rem;
    margin-top:3rem;
    margin-bottom:3rem;
    h2{
        font-size:var(--fs-xlarge);
        line-height:1;
        font-weight:700;
        text-align:center;
        ${TextUnderline}
        &::before{
            left:50%;
            transform:translateX(-50%);
        }
    }
    p{
        font-size:var(--fs-medium);
        margin-top:1rem;
        text-align:center;
        line-height:1.33;
    }
    a{
        margin-top:2rem;
        padding:1rem 1.5rem;
        margin-inline:auto;
    }
    span{
        width:100%;
        height:80%;
        display:none;
        background:var(--color-grey-light);
    }
    & > div:nth-child(3){
        margin-top:2rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    @media(min-width:290px){
        a{
            padding:1rem 2rem;
        }
    }
    @media(min-width:600px){
        h2{
            text-align:start;
            &::before{
                left:0;
                transform:none;
            }
        }
        a{
            margin-inline:0;
        }
        p{
            text-align:start;
        }
    }
    @media(min-width:1000px){
        display:grid;
        margin-top:6rem;
        margin-bottom:6rem;
        grid-template-columns:1fr 2px 1.2fr;
        gap:4rem;
        align-items:center;
        span{
            display:block;
        }
        & > div:nth-child(1){
            margin-bottom:3rem;
        }
        & > div:nth-child(3){
            margin-top:0;
        }
    }
    @media(min-width:1250px){
        & > div:nth-child(3){
            margin-left:3rem;
        }
    }
`;
import styled from "styled-components";
import { TextUnderline } from '../../styles/Mixins';

export const PolicyWrapper = styled.div`
    background:var(--color-white);
    overflow:hidden;
    a{
        margin-top:1rem;
        margin-left:1rem;
    }
`;

export const Header = styled.header`
    margin-top:5rem;
    text-align:center;
    padding-inline:1rem;
    & > h1{
        font-size:var(--fs-xlarge);
        ${TextUnderline}
        &::before{
            left:50%;
            transform:translateX(-50%);
        }
    }
    & > p{
        font-size:var(--fs-medium);
        text-align:center;
        max-width:50ch;
        margin-top:.9rem;
        margin-inline:auto;
        line-height:1.33;
    }
`;

export const PolicyContainer = styled.article`
    --gap:.5rem;
    margin-top:2rem;
    max-width:1350px;
    padding-inline:1rem;
    padding-bottom:3rem;
    margin-inline:auto;
    h2{
        font-size:var(--fs-big);
        text-transform:uppercase;
        margin-bottom:var(--gap);
    }
    p{
        font-size:var(--fs-medium);
        margin-bottom:calc(2 * var(--gap));
        line-height:1.33;
    }
    ul{
        list-style:disc;
        padding-left:2rem;
        margin-bottom:calc(2 * var(--gap));
        li{
            font-size:var(-fs-medium);
            p{
                margin-bottom:0;
            }
        }
    }
    section:last-child{
        p{
            margin-bottom:0;
        }
    }
    @media(min-width:1000px){
        margin-top:4rem;
        padding-bottom:7rem;
    }
`;


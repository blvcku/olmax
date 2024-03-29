import styled from "styled-components";
import { TextUnderline } from '../../../styles/Mixins';

export const OurServicesContainer = styled.section`
    background:var(--color-white);
    & > ul{
        display:grid;
        gap:3rem;
        max-width:1500px;
        margin-inline:auto;
        padding:3rem 1rem;
    }
    @media(min-width:730px){
        & > ul{
            gap:2rem;
            grid-template-columns:repeat(3,1fr);
        }
    }
    @media(min-width:730px){
        & > ul{
            padding:7rem 1rem;
        }
    }
`;

export const OurServicesListItem = styled.li`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1rem;
    text-align:center;
    img{
        max-width:6rem;
        height:auto;
    }
    h2{
        font-weight:700;
        font-size:var(--fs-big);
        ${TextUnderline}
        &::before{
            width:2.5rem;
            left:50%;
            transform:translateX(-50%);
        }
    }
    p{
        margin-top:.7rem;
        font-size:var(--fs-small);
        max-width:50ch;
        line-height:1.33;
    }
    @media(min-width:1180px){
        gap:1.5rem;
        flex-direction:row;
        align-items:start;
        text-align:start;
        h2{
            &::before{
                left:0;
                transform:none;
            }
        }
    }
`;
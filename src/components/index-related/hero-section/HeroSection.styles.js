import styled from "styled-components";
import HeroImage from '../../../images/hero-image.jpg';
import { TextUnderline } from '../../../styles/Mixins'; 

export const HeroSectionContainer = styled.section`
    background-image: url(${HeroImage});
    display:grid;
    h2{
        color:var(--color-white);
        font-size:var(--fs-large);
        font-weight:700;
        ${TextUnderline}
        &::before{
            left:50%;
            transform:translateX(-50%);
        }
    }
    p{
        color:var(--color-grey-light);
        font-weight:400;
        font-size:var(--fs-medium);
        max-width:70ch;
        margin-inline:auto;
        margin-top:.9rem;
        line-height:1.2;
    }
    div{
        grid-area: 1 / 1 / 2 / 2;
        padding:3rem 1rem;
        text-align:center;
    }
    &::before{
        background: rgba(0,0,0,0.7);
        content:'';
        display:block;
        grid-area: 1 / 1 / 2 / 2;
    }
    @media(min-width:730px){
        div{
            padding:7rem 1rem;
        }
    }
`;
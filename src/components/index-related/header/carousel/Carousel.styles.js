import styled from "styled-components";
import { TextUnderline } from '../../../../styles/Mixins';

export const CarouselContainer = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    display:flex;
    z-index:-1;
    transform: translateX(${({currentSlide}) => `${currentSlide * (-100)}%`});
    transition:transform .8s cubic-bezier(0.65,0.05,0.36,1);;
`;

export const CarouselSlide = styled.div`
    background-image:url('${({background}) => background}');
    background-size:cover;
    background-attachment:fixed;
    background-position:center center;
    width:100%;
    height:100%;
    flex-shrink:0;
    display:grid;
    overflow:hidden;
    &::before, &::after{
        content:'';
        grid-area: 1 / 1 / 2 / 2;
    }
    &::before{
        background:rgba(0, 0, 0, 0.5);
    }
    &::after{
        background:rgba(0,0,0, 0.3);
        transform:translateX(-100%);
        transition:transform .7s ease .4s;
    }
    div{
        grid-area: 1 / 1 / 2 / 2;
        display:flex;
        flex-direction:column;
        justify-content:center;
        text-align:start;
        z-index:3;
        padding-inline:1rem;
        max-width:calc(1300px + 2rem);
        width:100%;
        margin-inline:auto;
    }
    h2{
        color:var(--color-white);
        font-weight:500;
        font-size:var(--fs-xlarge);
        width:100%;
        ${TextUnderline}
    }
    p{
        color:var(--color-grey-light);
        font-weight:400;
        font-size:var(--fs-medium);
        max-width:45ch;
        margin-top:.9rem;
        margin-bottom:3rem;
        line-height:1.2;
    }
    ${({active}) => active && `
        &::after{
            transform:translateX(0);
        }
    `}
`;

export const CarouselIndicatorsContainer = styled.ol`
    position:absolute;
    left:50%;
    bottom:3.2rem;
    transform:translateX(-50%);
    display:flex;
`;

export const CarouselIndicator = styled.button`
    border:none;
    background:none;
    padding:.5rem;
    span{
        width:2rem;
        height:.3rem;
        border-radius:15px;
        background-color:${({active}) => active ? 'var(--color-white)' : 'var(--color-grey)'};
        display:block;
        transition:background-color .3s ease;
    }
`;

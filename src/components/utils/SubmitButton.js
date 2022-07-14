import React from "react";
import styled from 'styled-components';

const Button = styled.button`
    --text-color:var(--color-black);
    --bg-color:var(--color-orange);
    &:hover{
        --text-color:var(--color-white);
        --bg-color:var(--color-black-light);
    }
    &:active{
        transform:scale(0.99);
    }
    transition:background .3s ease, transform .2s ease;
    position:relative;
    font-size:var(--fs-small);
    font-weight:500;
    background:var(--bg-color);
    border:none;
    border-radius:0px;
    color:var(--text-color);
    display:flex;
    justify-content:center;
    align-items:center;
    gap:.65rem;
    padding:1rem 0;
    overflow:hidden;
    svg{
        width:1rem;
        height:auto;
        display:block;
    }
    svg[data-loading-wheel='true']{
        display:none;
        position:absolute;
        width:2rem;
        height:auto;
    }
    &:disabled{
        svg[data-loading-wheel='true']{
            display:block;
        }
        &::before{
            transition:background .3s ease;
            content:'';
            position:absolute;
            width:100%;
            height:100%;
            background:var(--bg-color);
        }
    }
`;

const SubmitButton = (props) => {

    const { children, ...buttonProps } = props;

    return(
        <Button {...buttonProps}>
            {children}
            <svg data-loading-wheel viewBox="0 0 50 50" >
                <path fill='currentColor' d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                    <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite" />
                </path>
            </svg>
        </Button>
    )
}

export default SubmitButton;
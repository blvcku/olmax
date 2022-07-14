import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";

const Container = styled(Link)`
    display:block;
    width:max-content;
    font-size:var(--fs-small);
    font-weight:500;
    color:var(--color-black);
    text-decoration:none;
    background:var(--color-orange);
    padding:1rem 2rem;
    transition:background .3s ease;
    &:hover{
        background:var(--color-black-light);
        color:var(--color-white);
    }
`;

const Button = (props) => {

    const { children, ...buttonProps } = props;

    return(
        <Container {...buttonProps}>
            {children}
        </Container>
    )
}

export default Button;
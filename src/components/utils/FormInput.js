import React, { useState } from "react";
import styled from 'styled-components';

const Label = styled.label`
    font-size:var(--fs-small);
    font-weight:500;
    padding-bottom:1rem;
    position:relative;
    textarea{
        resize:none;
        height:230px;
    }
    p{
        position:absolute;
        bottom:0;
        font-size:.75rem;
        color:var(--color-red);
        display:none;
    }
`;

const Input = styled.input`
    font-weight:400;
    font-size:var(--fs-small);
    display:block;
    width:100%;
    box-shadow: 0px 3px 6px #00000066;
    border:none;
    background:var(--color-white);
    outline:none;
    color:var(--color-grey-dark);
    padding:.6rem .8rem;
    margin-top:.3rem;
    outline-offset:-1px;
    ${({focusedOnce}) => focusedOnce && `
        &:invalid{
            outline:1px solid var(--color-red);
            & ~ p{
                display:block;
            }
        }
    `}
`;

const FormInput = (props) => {

    const [focusedOnce, setFocusedOnce] = useState(false);
    const { label, errorMessage, ...inputProps } = props;

    const handleFocusedOnce = e => {
        setFocusedOnce(true);
    }
    
    return(
        <Label>
            {label}
            <Input {...inputProps} focusedOnce={focusedOnce} onBlur={handleFocusedOnce} />
            <p role='alert'>{errorMessage}</p>
        </Label>
    )
}

export default FormInput;
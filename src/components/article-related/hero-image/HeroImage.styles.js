import styled from "styled-components";

export const HeroImageContainer = styled.div`
    position:relative;
    background-image:url(${({background}) => background});
    background-size:cover;
    background-position:center center;
    background-attachment:fixed;
    aspect-ratio:16/7;
    width:100%;
    min-height:200px;
    a{
        position:absolute;
        z-index:1;
        top:1rem;
        left:1rem;
    }

`;
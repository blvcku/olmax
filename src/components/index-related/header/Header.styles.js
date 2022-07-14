import styled from "styled-components";

export const HeaderContainer = styled.header`
    min-height:max(100vh, 650px);
    position:relative;
    overflow:hidden;
    & > div:nth-child(1){
        padding-inline:1rem;
        margin-top:1rem;
        h1{
            color:var(--color-orange);
            font-weight:900;
            font-size:var(--fs-xlarge);
            text-align:center;
        }
        @media(min-width:450px){
            h1{
                text-align:start;
            }
        }
        @media(min-width:1200px){
            padding-inline:8rem;
            margin-top:5rem;
        }
    }
`;
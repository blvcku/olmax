import styled from "styled-components";
import { TextUnderline } from '../../../styles/Mixins';

export const NewsListContainer = styled.section`
    padding:7rem 1rem;
    & > h2{
        font-size:var(--fs-xlarge);
        font-weight:700;
        text-align:center;
        ${TextUnderline}
        &::before{
            left:50%;
            transform:translateX(-50%);
        }
    }
    & > p{
        font-size:var(--fs-medium);
        color:var(--color-grey-dark);
        text-align:center;
        max-width:50ch;
        margin-top:.9rem;
        margin-inline:auto;
    }
`;
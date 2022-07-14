import { css } from "styled-components";

export const TextUnderline = css`
    position:relative;
    padding-bottom:.7rem;
    &::before{
        content:'';
        position:absolute;
        bottom:0;
        width:3rem;
        height:2px;
        background:var(--color-orange);
    }
`
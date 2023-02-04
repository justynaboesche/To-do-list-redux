import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    padding: 10px;
    border-bottom: 1px solid rgb(180, 169, 169) ;
    align-items: center;  

    ${({hidden}) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    word-break: break-word;

    ${({done}) => done && css`
        text-decoration: line-through;
    `}
`;
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

export const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0px;  
    transition: background 0.5s;

    ${({toggleDone}) => toggleDone && css`
        background-color: rgb(36, 129, 36); 
    `}

        &:hover {
            background-color: hsl(120, 57%, 36%);
    }

        &:active {
            background-color: hsl(120, 76%, 40%);
    }

    ${({remove}) => remove && css`
        background-color: rgb(192, 82, 82);
    `}

        &:hover {
            background-color: hsl(0, 61%, 60%);
        }

        &:active {
            background-color: hsl(0, 61%, 70%);
    }
`;
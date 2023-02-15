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
    border-bottom: 1px solid ${({ theme }) => theme.color.alto} ;
    align-items: center;  

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    word-break: break-word;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const ListButton = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
    padding: 0px;
    transition: 0.5s;  
`;
    
export const ToggleDoneButton = styled(ListButton)`
    background-color: ${({ theme }) => theme.color.forestGreen};
       
    &:hover {
        filter: brightness(120%);
    }
    &:active {
        filter: brightness(110%);
    }
`;
    
export const RemoveButton  = styled(ListButton)`
    background-color: ${({ theme }) => theme.color.crimson};

    &:hover {
        filter: brightness(140%);
    }

    &:active {
        filter: brightness(120%);
    }   
`;
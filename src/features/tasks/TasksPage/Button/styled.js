import styled from "styled-components";

export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.color.teal};
    background-color: transparent;
    cursor: pointer;
    padding: 20px; 
    transition: filter 1s;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 10px;
    }

    &:hover {
        filter: brightness(110%);
    }
        
    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
        cursor: not-allowed;
    }
`;
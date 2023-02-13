import styled from "styled-components";

export const Wrapper = styled.div`

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;  
 }
`;

export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.color.teal};
    background-color: transparent;
    cursor: pointer;
    padding: 20px; 
    transition: color 1s;

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
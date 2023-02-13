import styled from "styled-components";

export const StyledForm = styled.form`
    display:grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${( {theme}) => theme.color.alto};
`;

export const Button = styled.button`
    border: none;
    background-color: teal;
    color: white;
    padding: 10px;
    cursor: pointer;
    transition: background 1s, transform 0.8s;
    
    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.08);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }
`;
import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.alto};
    margin-bottom: 10px;
`;

export const Header = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid rgb(180, 169, 169);
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        padding-bottom: 20px;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 20px;
    padding: 20px;
`;

export const Body = styled.div`
    padding: 20px;
`;
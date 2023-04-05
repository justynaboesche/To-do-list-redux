import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.color.teal};
`;

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      flex-direction: column;
      align-items: center;
    }
`;

export const Item = styled.li`
    padding: 10px 20px;
    font-size: 18px;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};

    &:active {
      font-weight: bold;
    }

    &:hover {
      border-bottom: 1px solid;
    }
`;

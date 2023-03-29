import styled from "styled-components";

export const ImageWrapper = styled.p`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 50%;
  max-width: 300px;
  box-shadow: 9px 5px 13px ${({ theme }) => theme.color.alto};
`;

export const Paragraph = styled.p`
line-height: 1.5;
`;
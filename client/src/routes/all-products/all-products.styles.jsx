import { styled } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: 1390px) {
    justify-content: space-between;
  }
  @media (max-width: 595px) {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1;
  }
  @media (max-width: 1324px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

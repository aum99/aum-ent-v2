import { styled } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  justify-content: space-evenly;
  @media (max-width: 1390px) {
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

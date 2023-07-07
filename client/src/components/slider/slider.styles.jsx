import { styled } from "styled-components";

export const SliderDiv = styled.div`
  width: 100%;
  @media (max-width: 1070px) {
    width: 610px;
  }
  @media (max-width: 788px) {
    width: 600px;
  }
  @media (max-width: 655px) {
    width: 545px;
  }
  @media (max-width: 611px) {
    width: 400px;
  }
  @media (max-width: 465px) {
    width: 180px;
  }
  @media (max-width: 415px) {
    width: 295px;
  }
  margin-bottom: 10px;
`;

export const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

import { styled } from "styled-components";

export const ProductCardContainer = styled.div`
  width: 15em;
  margin: 10px;
  margin-bottom: 25px;
  display: flex;
  height: 440px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border: 2px solid #adb5bd;
  background: linear-gradient(#fff, #fff 50%, #212529 50%, #212529);
  background-size: 100% 200%;
  transition: background 0.3s;
  overflow: hidden;
  img {
    width: 270px;
    height: 55%;
    margin-bottom: 5px;
    background-size: cover;
    background-position: center;
  }
  &:hover {
    border-color: #000;
    background-position: 100% 100%;
    img {
      transform: scale(1.07);
      transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
  @media (max-width: 655px) {
    width: 160px;
    height: 290px;
    margin: 10px 0;
    img {
      width: 150px;
    }
  }
  @media (max-width: 415px) {
    width: 120px;
    height: 290px;
    margin: 7px 0;
    padding: 8px;
    img {
      width: 120px;
    }
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${ProductCardContainer}:hover & {
    color: #fff;
  }
`;

export const Name = styled.span`
  font-size: larger;
  font-weight: 600;
  margin: 10px 0;
  @media (max-width: 655px) {
    font-size: small;
  }
  ${ProductCardContainer}:hover & {
    color: #fff;
  }
`;

export const Price = styled.span`
  font-size: larger;
  font-weight: 600;
  margin-right: 10px;
  @media (max-width: 655px) {
    font-size: small;
  }
`;

export const ProductDescription = styled.span`
  font-size: medium;
  display: flex;
  margin: 10px 0;
  @media (max-width: 655px) {
    font-size: x-small;
  }
  ${ProductCardContainer}:hover & {
    color: #fff;
  }
`;

export const AddButton = styled.button`
  background-color: #212529;
  display: flex;
  margin-top: 8px;
  color: #ffffff;
  padding: 15px 25px;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  border: 2px solid;
  &:hover {
    background-color: #ffffff;
    color: #000000;
    border: 2px solid;
  }
  @media (max-width: 655px) {
    padding: 5px 15px;
    margin-top: 0;
  }
`;

import { styled } from "styled-components";

export const ProductCardContainer = styled.div`
  width: 15em;
  margin: 10px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: 2px solid #adb5bd;

  img {
    width: 270px;
    height: 60%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  &:hover {
    border-color: #000;
  }
  @media (max-width: 655px) {
    width: 160px;
    height: 230px;
    margin: 10px 0;
    img {
      width: 150px;
    }
  }
  @media (max-width: 415px) {
    width: 120px;
    height: 210px;
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
`;

export const Name = styled.span`
  font-size: larger;
  font-weight: 600;
  margin: 10px 0;
  @media (max-width: 655px) {
    font-size: small;
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
`;

export const AddButton = styled.button`
  background-color: #000000;
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

import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  justify-content: space-between;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 30px;
  z-index: 99;
`;

export const ProductsContainer = styled.div`
  margin: 5px;
  height: 75%;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* border: 1px solid black; */
  overflow: scroll;
`;

export const CheckoutButton = styled(Link)`
  border: 1px solid black;
  background-color: #000000;
  color: #ffffff;
  padding: 10px 12px;
  margin: 5px 20px;
  display: grid;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
`;

export const EmptyMessage = styled.span`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  font-weight: 500;
`;

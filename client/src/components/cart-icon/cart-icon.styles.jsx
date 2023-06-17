import { styled } from "styled-components";
import { ReactComponent as ShoppingSvg } from "../../assets/cart.svg";

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 50px;
  height: 50px;
`;
export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bolder;
  border-radius: 50%;
  bottom: 25px;
  color: #fff;
  background-color: #000;
  height: 20px;
  width: 20px;
`;

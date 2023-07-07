import { styled } from "styled-components";
import { Fragment } from "react";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const DeliveryInfoContainer = styled.div`
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const OrderSummaryContainer = styled.div`
  width: 40%;
  height: 80vh;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 750px) {
    width: 100%;
    height: 50vh;
    margin-top: 20px;
  }
`;

export const EmptyMessage = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 750px) {
    height: 30vh;
  }
`;

export const ItemsContainer = styled.div`
  overflow: scroll;
`;

export const Header = styled.span`
  width: 100%;
  font-size: medium;
  font-weight: 600;
  margin: 5px 15px;
  margin-bottom: 20px;
`;

export const InfoInput = styled.input`
  width: 46%;
  height: 40px;
  padding-left: 10px;
  margin: 5px;
  border: 1px solid black;
  @media (max-width: 1345px) {
    width: 45%;
  }
  @media (max-width: 1128px) {
    width: 100%;
    margin: 5px 15px;
    height: 80%;
  }
`;

export const AddressInput = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  margin: 5px;
  border: 1px solid black;
  @media (max-width: 1128px) {
    height: 10%;
    margin: 5px 15px;
  }
`;

export const InputBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: space-between;
  width: 100%;
`;

export const SubAddressInput = styled.input`
  height: 40px;
  padding-left: 10px;
  flex-grow: 1;
  margin: 0 5px;
  margin-top: 5px;
  border: 1px solid black;
  @media (max-width: 1128px) {
    height: 15%;
    margin: 5px 15px;
  }
`;

export const CartTotal = styled.div`
  width: 100%;
  border-top: 1px solid black;
  padding-top: 10px;
  text-align: end;
  font-weight: 900;
`;

export const CheckoutButton = styled.button`
  background-color: #222;
  border-radius: 1rem;
  border-style: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 10px 5px;
  padding: 1rem;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  box-sizing: border-box;
  width: 99%;
  touch-action: manipulation;
  &:hover,
  :focus {
    opacity: 0.75;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  margin: 5px 15px;
`;

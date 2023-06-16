import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3%;
  margin: 0 20%;
  box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px,
    rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px,
    rgb(255, 217, 19) 20px -20px;
  margin-top: 50px;
  @media (max-width: 950px) {
    margin: 0 10%;
    margin-top: 50px;
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  @media (max-width: 650px) {
    width: 80%;
  }
`;

export const Header = styled.p`
  margin: 0;
  font-size: xx-large;
  text-align: center;
  font-weight: 800;
`;

export const Info = styled.p`
  margin: 20px;
  text-align: center;
  font-size: small;
`;

export const InputBox = styled.input`
  height: 40px;
  width: 100%;
  margin: 5px 0;
  box-sizing: border-box;
  padding-left: 10px;
  border: 1px solid black;
`;

export const SignUpButton = styled.button`
  background-color: #222;
  border-radius: 1rem;
  border-style: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 5px 0;
  padding: 1rem;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  box-sizing: border-box;
  width: 95%;
  touch-action: manipulation;
  &:hover,
  :focus {
    opacity: 0.75;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AlternateSpan = styled.p`
  margin: 25px;
  text-align: center;
  font-size: small;
`;

export const SignIn = styled(Link)`
  color: blue;
`;

export const InputDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
`;

export const InputLabel = styled.label`
  position: absolute;
  left: 20px;
  color: #000;
  pointer-events: none;
  transform: translateY(1rem);
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Input = styled.input`
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
  width: 85%;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  color: #000;
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:valid {
    outline: none;
    border: 1.5px solid #1a73e8;
  }
  &:focus ~ ${InputLabel}, &:valid ~ ${InputLabel} {
    transform: translateY(-50%) scale(0.8);
    background-color: #fff;
    padding: 0 0.2em;
    color: #000;
  }
`;

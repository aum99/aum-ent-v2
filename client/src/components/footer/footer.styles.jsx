import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #fff;
  border-bottom: 5px solid #8d99ae;
`;

export const NewsLetterContainer = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #212529;
`;

export const Header = styled.h1`
  margin: 0;
  margin-bottom: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const InputSubmit = styled.button`
  min-height: 50px;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0 6px 6px 0;
  background-color: #fff;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    color: #212529;
  }
`;

export const Input = styled.input`
  min-height: 48px;
  max-width: 150px;
  padding: 0 1rem;
  color: #fff;
  font-size: 15px;
  border: 1px solid #fff;
  border-radius: 6px 0 0 6px;
  background-color: transparent;
  &:focus,
  :focus-visible {
    border-color: #fff;
    outline: none;
  }
`;

export const SocialsContainer = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: #000;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  @media (max-width: 615px) {
    width: 500px;
  }
  @media (max-width: 505px) {
    width: 350px;
  }
`;

export const SocialLink = styled(Link)`
  text-decoration: none;
  font-size: larger;
  color: white;
  margin: auto;
  @media (max-width: 615px) {
    font-size: medium;
  }
`;

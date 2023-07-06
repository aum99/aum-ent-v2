import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media (max-width: 945px) {
    justify-content: center;
    align-items: center;
  }
  bottom: -100%;
  animation: slideUp 0.5s linear 5s forwards;

  @keyframes slideUp {
    0% {
      bottom: -100%;
    }
    100% {
      bottom: 0;
    }
  }
`;
export const Header = styled.h1`
  font-weight: 800;
  margin-bottom: 2px;
`;

export const Description = styled.p`
  font-size: x-large;
  font-weight: 500;
  margin-bottom: 1em;
  @media (max-width: 465px) {
    text-align: center;
  }
`;

export const Header2 = styled.p`
  font-size: large;
  font-weight: 300;
  margin: 5px 0;
`;
export const Header3 = styled.p`
  font-size: x-large;
  font-weight: 400;
  margin: 5px 0;
  margin-bottom: 0.8em;
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  width: 60%;
  margin: 0.8em 0;
  justify-content: space-between;
`;
export const SocialLink = styled(Link)`
  text-decoration: none;
  font-size: xx-large;
  color: #adb5bd;
  &:hover {
    color: #000;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  width: 50%;
  flex-direction: column;
  padding: 15px 30px;
  @media (max-width: 945px) {
    width: 100%;
    padding: 0 40px;
  }
`;

export const ContactButton = styled.button`
  background-color: #4285f4;
  border-radius: 1rem;
  border-style: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 10px 0;
  padding: 1rem;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  box-sizing: border-box;
  width: 100%;
  touch-action: manipulation;
  &:hover,
  :focus {
    opacity: 0.75;
  }
`;

// ********** TextArea ********

export const TextAreaDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
`;

export const TextAreaLabel = styled.label`
  position: absolute;
  left: 20px;
  color: #000;
  pointer-events: none;
  transform: translateY(1rem);
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const TextAreaBox = styled.textarea`
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
  width: 100%;
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
  &:focus ~ ${TextAreaLabel}, &:valid ~ ${TextAreaLabel} {
    transform: translateY(-50%) scale(0.8);
    background-color: #fff;
    padding: 0 0.2em;
    color: #000;
  }
`;

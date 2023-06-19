import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  background-color: #000;
  flex-direction: column;
  align-items: center;
  color: #fff;
  border-bottom: 5px solid #8d99ae;
`;

export const FooterLink = styled(Link)`
  margin: 0;
  font-size: medium;
  margin: 5px;
  font-weight: 300;
  text-decoration: none;
  color: #fff;
`;

export const BrandHeader = styled.p`
  font-size: larger;
  font-weight: 700;
  margin: 10px 0;
  margin-top: 20px;
`;

export const Button = styled.button`
  border: none;
  background: none;
  color: #8b8ba7;
`;

export const Description = styled.p`
  font-size: x-large;
  font-weight: 900;
  margin: 10px 0;
`;

export const ContactForm = styled.form`
  --timing: 0.3s;
  --width-of-input: 300px;
  --height-of-input: 40px;
  --border-height: 2px;
  --input-bg: #fff;
  --border-color: #2f2ee9;
  --border-radius: 30px;
  --after-border-radius: 1px;
  position: relative;
  width: var(--width-of-input);
  height: var(--height-of-input);
  display: flex;
  align-items: center;
  padding-inline: 0.8em;
  border-radius: var(--border-radius);
  transition: border-radius 0.5s ease;
  background: var(--input-bg, #fff);
  margin: 10px 0;
  &::before {
    content: "";
    position: absolute;
    background: var(--border-color);
    transform: scaleX(0);
    transform-origin: center;
    width: 100%;
    height: var(--border-height);
    left: 0;
    bottom: 0;
    border-radius: 1px;
    transition: transform var(--timing) ease;
  }
  &:focus-within {
    border-radius: var(--after-border-radius);
  }
`;

export const Svg = styled.svg`
  width: 17px;
  margin-top: 3px;
`;

export const ResetButton = styled.button`
  border: none;
  background: none;
  opacity: 0;
  visibility: hidden;
`;

export const Input = styled.input`
  font-size: 0.9rem;
  background-color: transparent;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
  &:focus {
    outline: none;
  }
  &:focus-within::before {
    transform: scale(1);
  }
  &:not(:placeholder-shown) ~ ${ResetButton} {
    opacity: 1;
    visibility: visible;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  margin: 10px 0;
  margin-bottom: 20px;

  justify-content: space-between;
`;

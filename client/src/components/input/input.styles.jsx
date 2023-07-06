import { styled } from "styled-components";

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

export const InputBox = styled.input`
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
  &:focus ~ ${InputLabel}, &:valid ~ ${InputLabel} {
    transform: translateY(-50%) scale(0.8);
    background-color: #fff;
    padding: 0 0.2em;
    color: #000;
  }
`;

import { styled } from "styled-components";

export const SpinnerOverlay = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  --clr: #000;
  /* color of spining  */
  width: 50px;
  height: 50px;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 10px solid transparent;
    border-top-color: var(--clr);
  }

  &::before {
    z-index: 100;
    animation: spin 1s infinite;
  }

  &::after {
    border: 10px solid #ccc;
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

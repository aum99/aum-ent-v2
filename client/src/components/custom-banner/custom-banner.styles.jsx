import { styled } from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 50px;
  height: 500px;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 940px) {
    margin: 0 20px;
    width: auto;
  }
  @media (max-width: 940px) {
    height: 450px;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #adb5bd;
  justify-content: center;
  align-items: center;
`;

export const TextBox = styled.div`
  width: 60%;
  h1 {
    @media (max-width: 655px) {
      font-size: larger;
    }
  }
`;

export const ContactButton = styled.button`
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
  width: 50%;
  touch-action: manipulation;
  &:hover,
  :focus {
    opacity: 0.75;
  }
  @media (max-width: 450px) {
    width: auto;
  }
`;

export const ImageContainer = styled.div`
  background-image: url("https://blog.thomasnet.com/hubfs/1MARCOMM/Blog/2018/May/Manufacturing%20Quality%20Control.jpg");
  background-size: cover;
  background-position: center;
  flex: 1;
  height: 100%;
  @media (max-width: 940px) {
    display: none;
  }
`;

import { styled } from "styled-components";

export const CategoryContainer = styled.div`
  height: 300px;
  flex-basis: 31%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 10px;
  border: 1px solid black;
  @media (max-width: 1142px) {
    height: 200px;
    flex-basis: 30%;
  }
  @media (max-width: 1245px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 680px) {
    flex-basis: 40%;
  }
  @media (max-width: 430px) {
    flex-basis: 43%;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  filter: brightness(60%);
  opacity: 0.8;
  &:hover {
    filter: brightness(40%);
  }
`;

export const Body = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  color: #fff;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  position: absolute;
  @media (max-width: 1335px) {
    font-size: 1.7rem;
  }
  @media (max-width: 1245px) {
    font-size: 1.5rem;
  }
  @media (max-width: 605px) {
    font-size: 1.2rem;
  }
`;

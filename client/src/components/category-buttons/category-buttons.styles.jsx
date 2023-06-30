import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const CategoryButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CategoryButton = styled(Link)`
  padding: 0.5em;
  color: #000000;
  border: 2px solid #adb5bd;
  margin: 10px;
  text-decoration: none;
  &:hover {
    border-color: #000;
  }
  @media (max-width: 687px) {
    font-size: smaller;
  }
`;

import { BackgroundImage, CategoryContainer, Body } from "./grid-item.styles";
import { useNavigate } from "react-router-dom";

const GridItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const HandleNavigate = () => navigate(route);
  return (
    <CategoryContainer onClick={HandleNavigate}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>{title}</Body>
    </CategoryContainer>
  );
};

export default GridItem;

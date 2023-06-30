import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addCartItem } from "../../store/cart/cart.action";

import {
  ProductCardContainer,
  ProductInfo,
  Name,
  Price,
  ProductDescription,
  AddButton,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const addProduct = () => dispatch(addCartItem(cartItems, product));
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <ProductInfo>
        <Name>{name}</Name>
        <Price>Rs. {price}</Price>
      </ProductInfo>
      <ProductDescription>Lorem ipsum desc for prod</ProductDescription>
      <AddButton onClick={addProduct}>Add to Cart</AddButton>
    </ProductCardContainer>
  );
};

export default ProductCard;

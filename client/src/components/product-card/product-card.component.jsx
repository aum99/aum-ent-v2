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
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, description } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProduct = () => {
    toast.success("Added to cart!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch(addCartItem(cartItems, product));
  };
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <ProductInfo>
        <Name>{name}</Name>
        <Price>Rs. {price}</Price>
      </ProductInfo>
      <ProductDescription>{description}</ProductDescription>
      <AddButton onClick={addProduct}>Add to Cart</AddButton>
    </ProductCardContainer>
  );
};

export default ProductCard;

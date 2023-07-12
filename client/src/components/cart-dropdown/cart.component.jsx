import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  selectIsCartOpen,
  selectCartItems,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectCurrentUser } from "../../store/user/user.selector";

import DropdownItem from "../dropdown-item/dropdown-item.component";

import {
  CartDropdownContainer,
  ProductsContainer,
  CheckoutButton,
  EmptyMessage,
} from "./cart.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  const isUserLoggedIn = useSelector(selectCurrentUser);
  const ToggleCart = () => {
    if (isUserLoggedIn) {
      navigate("/checkout");
    } else {
      toast.error("Please sign-in to checkout!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartDropdownContainer>
      <ProductsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <DropdownItem key={cartItem.id} item={cartItem}></DropdownItem>
          ))
        ) : (
          <EmptyMessage>Nothing in cart yet</EmptyMessage>
        )}
      </ProductsContainer>
      <CheckoutButton onClick={ToggleCart}>Checkout</CheckoutButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

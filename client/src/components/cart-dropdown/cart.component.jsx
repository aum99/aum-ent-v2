import { useDispatch, useSelector } from "react-redux";

import {
  selectIsCartOpen,
  selectCartItems,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import DropdownItem from "../dropdown-item/dropdown-item.component";

import {
  CartDropdownContainer,
  ProductsContainer,
  CheckoutButton,
  EmptyMessage,
} from "./cart.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  const ToggleCart = () => {
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
      <CheckoutButton to="/checkout" onClick={ToggleCart}>
        Checkout
      </CheckoutButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

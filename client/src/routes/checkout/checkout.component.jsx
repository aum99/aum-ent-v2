import { useSelector } from "react-redux";
import axios from "axios";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import CartItem from "../../components/cart-item/cart-item.component";

import {
  CheckoutContainer,
  DeliveryInfoContainer,
  Header,
  OrderSummaryContainer,
  ItemsContainer,
  InfoInput,
  AddressInput,
  SubAddressInput,
  SubAddressContainer,
  CartTotal,
} from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const user = useSelector(selectCurrentUser);
  const checkoutHandler = async () => {
    const {
      data: { key },
    } = await axios.get("http://localhost:4000/api/getkey");
    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", {
      total,
      user,
      cartItems,
    });
    const options = {
      key,
      amount: order.amount,
      name: "Aum Enterprises",
      description: "Test Transaction",
      image: "https://avatars.githubusercontent.com/u/93549019?v=4",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: user ? user.currentUser : "Angel Buddy",
        email: "user@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#0F0F0F",
      },
    };
    var razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <CheckoutContainer>
      <OrderSummaryContainer>
        <Header>Order Summary</Header>
        <ItemsContainer>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem}></CartItem>
          ))}
        </ItemsContainer>
        <CartTotal>Rs. {total}</CartTotal>
      </OrderSummaryContainer>
      <DeliveryInfoContainer>
        <Header>Delivery Information</Header>
        <InfoInput
          type="text"
          placeholder="First Name"
          name="fname"
          id="fname"
          required
        ></InfoInput>
        <InfoInput
          type="text"
          placeholder="Last Name"
          name="lname"
          id="lname"
          required
        ></InfoInput>
        <InfoInput
          type="text"
          placeholder="Mobile Number"
          name="phone"
          id="phone"
          required
        ></InfoInput>
        <InfoInput
          type="text"
          placeholder="Email"
          name="email"
          id="email"
          required
        ></InfoInput>
        <AddressInput
          type="text"
          placeholder="Address"
          name="address"
          id="address"
          required
        ></AddressInput>
        <SubAddressContainer>
          <SubAddressInput
            type="text"
            placeholder="City"
            name="city"
            id="city"
            required
          ></SubAddressInput>
          <SubAddressInput
            type="text"
            placeholder="State"
            name="state"
            id="state"
            required
          ></SubAddressInput>
          <SubAddressInput
            type="text"
            placeholder="Zip Code"
            name="zip"
            id="zip"
            required
          ></SubAddressInput>
        </SubAddressContainer>
        <button onClick={checkoutHandler}>Checkout</button>
      </DeliveryInfoContainer>
    </CheckoutContainer>
  );
};

export default Checkout;

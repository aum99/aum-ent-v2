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
  InputBoxContainer,
  CartTotal,
  CheckoutButton,
  FormContainer,
} from "./checkout.styles";
import { useState } from "react";

const FormFields = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
};

const Checkout = () => {
  const [formFields, setFormFields] = useState(FormFields);
  const { fname, lname, email, phone } = formFields;
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const user = useSelector(selectCurrentUser);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const HandleCheckout = async (e) => {
    e.preventDefault();
    try {
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
          name: user ? fname + " " + lname : "Angel Buddy",
          email: email,
          contact: phone,
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
    } catch (err) {
      alert("There was an error connecting to the server");
    }
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
        <FormContainer onSubmit={HandleCheckout}>
          <InputBoxContainer>
            <InfoInput
              type="text"
              placeholder="First Name"
              onChange={HandleChange}
              value={fname}
              name="fname"
              required
            ></InfoInput>
            <InfoInput
              type="text"
              onChange={HandleChange}
              value={lname}
              placeholder="Last Name"
              name="lname"
              required
            ></InfoInput>
          </InputBoxContainer>
          <InputBoxContainer>
            <InfoInput
              type="text"
              onChange={HandleChange}
              value={phone}
              placeholder="Mobile Number"
              name="phone"
              required
            ></InfoInput>
            <InfoInput
              type="text"
              onChange={HandleChange}
              value={email}
              placeholder="Email"
              name="email"
              required
            ></InfoInput>
          </InputBoxContainer>
          <InputBoxContainer>
            <AddressInput
              type="text"
              placeholder="Address"
              name="address"
              required
            ></AddressInput>
          </InputBoxContainer>
          <InputBoxContainer>
            <SubAddressInput
              type="text"
              placeholder="City"
              name="city"
              required
            ></SubAddressInput>
            <SubAddressInput
              type="text"
              placeholder="State"
              name="state"
              required
            ></SubAddressInput>
            <SubAddressInput
              type="text"
              placeholder="Zip Code"
              name="zip"
              required
            ></SubAddressInput>
          </InputBoxContainer>
          <CheckoutButton>Checkout</CheckoutButton>
        </FormContainer>
      </DeliveryInfoContainer>
    </CheckoutContainer>
  );
};

export default Checkout;

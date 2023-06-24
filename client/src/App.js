import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Products from "./routes/products/products.component";
import Checkout from "./routes/checkout/checkout.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from "./routes/sign-up/sign-up.component";
import PaymentSuccess from "./components/payment-success/payment-success.component";
import Profile from "./components/profile/profile.component";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="products/*" element={<Products />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="paymentsuccess" element={<PaymentSuccess />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;

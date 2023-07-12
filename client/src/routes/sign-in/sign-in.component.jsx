import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signInStart, googleSignInStart } from "../../store/user/user.action";

import {
  Container,
  SignInContainer,
  Header,
  Info,
  SignInButton,
  OrDivider,
  SignInGoogleButton,
  AlternateSpan,
  SignUp,
  InputDiv,
  InputLabel,
  Input,
  Form,
} from "./sign-in.styles";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();
  const isUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const HandleGoogleSignIn = async () => {
    dispatch(googleSignInStart());
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart(email, password));
      resetFormFields();
    } catch (err) {
      alert("Failed to sign in user, ", err.message);
    }
  };

  useEffect(() => {
    if (isUser) {
      navigate("/profile");
    }
  }, [isUser]);
  return (
    <Container>
      <SignInContainer>
        <Header>Hi there!</Header>
        <Info>Login to explore our wide range of products</Info>
        <Form onSubmit={HandleSubmit}>
          <InputDiv>
            <Input
              type="email"
              name="email"
              value={email}
              autoComplete="off"
              onChange={HandleChange}
              required
            ></Input>
            <InputLabel>Email</InputLabel>
          </InputDiv>
          <InputDiv>
            <Input
              type="password"
              name="password"
              value={password}
              autoComplete="off"
              onChange={HandleChange}
              required
            ></Input>
            <InputLabel>Password</InputLabel>
          </InputDiv>
          <SignInButton type="submit">SIGN IN</SignInButton>
        </Form>
        <OrDivider>OR</OrDivider>
        <SignInGoogleButton onClick={HandleGoogleSignIn}>
          GOOGLE SIGN IN
        </SignInGoogleButton>
        <AlternateSpan>
          Do not have an accout?{" "}
          <SignUp to="/sign-up">Create an account</SignUp>
        </AlternateSpan>
      </SignInContainer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default SignIn;

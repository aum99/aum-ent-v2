import { useState } from "react";
import { useDispatch } from "react-redux";

import { signUpStart } from "../../store/user/user.action";

import {
  Container,
  SignUpContainer,
  Header,
  Info,
  Form,
  SignUpButton,
  AlternateSpan,
  SignIn,
  Input,
  InputDiv,
  InputLabel,
} from "./sign-up.styles";

const defaultFormFields = {
  name: "",
  email: "",
  number: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, number, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match, please try again!");
    }
    try {
      dispatch(signUpStart(email, password, name, number));
      resetFormFields();
    } catch (err) {
      alert("Failed to sign up, ", err.message);
    }
  };
  return (
    <Container>
      <SignUpContainer>
        <Header>Create an account</Header>
        <Info>Get started with registering for your account</Info>
        <Form onSubmit={HandleSubmit}>
          <InputDiv>
            <Input
              type="text"
              name="name"
              value={name}
              autoComplete="off"
              onChange={HandleChange}
              required
            ></Input>
            <InputLabel>Name</InputLabel>
          </InputDiv>
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
              type="number"
              name="number"
              value={number}
              autoComplete="off"
              onChange={HandleChange}
              required
            ></Input>
            <InputLabel>Number</InputLabel>
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
          <InputDiv>
            <Input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              autoComplete="off"
              onChange={HandleChange}
              required
            ></Input>
            <InputLabel>Confirm Password</InputLabel>
          </InputDiv>
          <SignUpButton type="submit">Sign Up</SignUpButton>
        </Form>
        <AlternateSpan>
          Already have an account? <SignIn to="/sign-in">Log in</SignIn>
        </AlternateSpan>
      </SignUpContainer>
    </Container>
  );
};

export default SignUp;

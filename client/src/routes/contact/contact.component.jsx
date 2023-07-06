import { useState } from "react";

import {
  ContactContainer,
  DetailsContainer,
  Header,
  Description,
  Header2,
  Header3,
  SocialLinksContainer,
  SocialLink,
  FormContainer,
  ContactButton,
  TextAreaBox,
  TextAreaDiv,
  TextAreaLabel,
} from "./contact.styles";

import Input from "../../components/input/input.component";

const defaultFormFields = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, message } = formFields;
  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <ContactContainer>
      <DetailsContainer>
        <Header>Get In Touch!</Header>
        <Description>
          We're always open to collaborate and help you out!
        </Description>
        <Header2>Wanna hear from us?</Header2>
        <Header3>Schedule a call with us</Header3>
        <Header2>Wanna mail us?</Header2>
        <Header3>aumenterprises@email.com</Header3>
        <SocialLinksContainer>
          <SocialLink>
            <i class="bx bxl-facebook"></i>
          </SocialLink>
          <SocialLink>
            <i class="bx bxl-instagram"></i>
          </SocialLink>
          <SocialLink>
            <i class="bx bxl-twitter"></i>
          </SocialLink>
          <SocialLink>
            <i class="bx bxl-reddit"></i>
          </SocialLink>
        </SocialLinksContainer>
      </DetailsContainer>
      <FormContainer>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={ChangeHandler}
          label="Name"
        />
        <Input
          type="email"
          name="email"
          value={email}
          onChange={ChangeHandler}
          label="Email"
        />
        <TextAreaDiv>
          <TextAreaBox
            name="message"
            rows="4"
            value={message}
            onChange={ChangeHandler}
            autoComplete="off"
            required
          />
          <TextAreaLabel>Type your message</TextAreaLabel>
        </TextAreaDiv>
        <ContactButton>Send Message</ContactButton>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;

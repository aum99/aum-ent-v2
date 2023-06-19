import {
  BrandHeader,
  FooterContainer,
  FooterLink,
  Button,
  ContactForm,
  Svg,
  ResetButton,
  Input,
  LinksContainer,
  Description,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <BrandHeader>Aum Enterprises</BrandHeader>
      <Description>
        Wanna hear from us <br /> Enter your mail below
      </Description>
      <ContactForm>
        <Button>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="email"
          >
            <path fill="#fff" d="M22.5 17.5h-15l1-10h15z"></path>
            <path fill="#cce7ff" d="m8.3 9.5-.8 8h15l.8-8z"></path>
            <path
              fill="none"
              stroke="#1078ff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M.5 15.5h5M2.5 12.5H6M4.5 9.5h2M22.5 17.5h-15l1-10h15z"
            ></path>
            <path
              fill="none"
              stroke="#1078ff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="m8.5 7.5 7.5 6 7.5-6z"
            ></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </Svg>
        </Button>
        <Input placeholder="Type your mail" required="" type="email" />
        <ResetButton>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </Svg>
        </ResetButton>
      </ContactForm>
      <LinksContainer>
        <FooterLink to="/products">Products</FooterLink>
        <FooterLink to="/about">About Us</FooterLink>
        <FooterLink to="/contact">Contact</FooterLink>
        <FooterLink to="/">Home</FooterLink>
      </LinksContainer>
    </FooterContainer>
  );
};

export default Footer;

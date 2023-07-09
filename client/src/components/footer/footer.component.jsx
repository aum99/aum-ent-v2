import {
  FooterContainer,
  Header,
  Input,
  InputGroup,
  InputSubmit,
  LinksContainer,
  NewsLetterContainer,
  SocialLink,
  SocialsContainer,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <NewsLetterContainer>
        <Header>Newsletter</Header>
        <InputGroup>
          <Input
            type="email"
            className="input"
            id="Email"
            name="Email"
            autoComplete="off"
          />
          <InputSubmit type="submit">Subscribe</InputSubmit>
        </InputGroup>
      </NewsLetterContainer>
      <SocialsContainer>
        <LinksContainer>
          <SocialLink to="/about">About</SocialLink>
          <SocialLink>Store Locator</SocialLink>
          <SocialLink>FAQs</SocialLink>
          <SocialLink>Products</SocialLink>
          <SocialLink>Careers</SocialLink>
          <SocialLink to="/contact">Contact Us</SocialLink>
        </LinksContainer>
        &#169; Aum Enterprise
      </SocialsContainer>
    </FooterContainer>
  );
};

export default Footer;

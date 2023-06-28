import {
  BannerContainer,
  TextContainer,
  ImageContainer,
  TextBox,
  ContactButton,
} from "./custom-banner.styles";

const CustomBaner = () => {
  return (
    <BannerContainer>
      <TextContainer>
        <TextBox>
          <h1>Get Custom Products</h1>
          <p>
            Send us the drawing and your prefered dimensions will talk to our
            team and contact you
          </p>
          <ContactButton>Contact Us</ContactButton>
        </TextBox>
      </TextContainer>
      <ImageContainer />
    </BannerContainer>
  );
};

export default CustomBaner;

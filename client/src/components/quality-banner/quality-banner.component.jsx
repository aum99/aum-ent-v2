import { useNavigate } from "react-router-dom";
import {
  BannerContainer,
  TextContainer,
  ImageContainer,
  TextBox,
  ContactButton,
} from "./quality-banner.styles";

const QualityBanner = () => {
  const navigate = useNavigate();
  const NavigateToContact = () => navigate("/contact");

  return (
    <BannerContainer>
      <ImageContainer />
      <TextContainer>
        <TextBox>
          <h1>Quality Assured Products</h1>
          <p>
            Experience uncompromising quality and elevate your satisfaction with
            our exceptional products
          </p>
          <ContactButton onClick={NavigateToContact}>Contact Us</ContactButton>
        </TextBox>
      </TextContainer>
    </BannerContainer>
  );
};

export default QualityBanner;

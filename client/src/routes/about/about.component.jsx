import React from "react";
import {
  Header,
  ImageContainer,
  RootContainer,
  SubText,
  TextContainer,
  TextBox,
} from "./about.styles";

const About = () => {
  return (
    <div>
      <RootContainer>
        <ImageContainer imageurl="https://images.unsplash.com/photo-1636565230545-983dbf361d5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />
        <TextContainer>
          <TextBox>
            <Header>Hello world</Header>
            <SubText>
              {" "}
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem{" "}
            </SubText>
          </TextBox>
        </TextContainer>
      </RootContainer>
      <RootContainer>
        <TextContainer>
          <TextBox>
            <Header>Hello world</Header>
            <SubText>
              {" "}
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem{" "}
            </SubText>
          </TextBox>
        </TextContainer>
        <ImageContainer imageurl="https://images.unsplash.com/photo-1636565230545-983dbf361d5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />
      </RootContainer>
    </div>
  );
};

export default About;

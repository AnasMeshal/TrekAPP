import React from "react";

//Styles
import {
  CenterButton,
  SignInButtonStyled,
  SignUpButtonStyled,
  BackgroundImage,
  Title,
} from "./styles";
import { Text, Button } from "native-base";
// REVIEW: Clean up your imports

const Home = ({ navigation }) => {
  return (
    <BackgroundImage
      source={{
        uri:
          "https://i.pinimg.com/originals/81/fd/00/81fd00d4f4b7a7f5fe3049fbb4b668bc.jpg",
      }}
    >
      <Title>Welcome to Trek</Title>

      <SignInButtonStyled onPress={() => navigation.navigate("Signin")}>
        <Text>Sign in</Text>
      </SignInButtonStyled>
      <SignUpButtonStyled onPress={() => navigation.navigate("Signup")}>
        <Text>Sign up</Text>
      </SignUpButtonStyled>
    </BackgroundImage>
  );
};

export default Home;

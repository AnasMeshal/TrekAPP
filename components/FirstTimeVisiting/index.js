import React from "react";
import { Text } from "native-base";
import {
  SignInButtonStyled,
  SignUpButtonStyled,
  BackgroundImage,
  Title,
  X,
} from "./styles";
import profileStore from "../../stores/profileStore";

const FirstTimeVisiting = ({ navigation }) => {
  return (
    <BackgroundImage
      source={{
        uri:
          "https://i.pinimg.com/originals/81/fd/00/81fd00d4f4b7a7f5fe3049fbb4b668bc.jpg",
      }}
    >
      <X
        onPress={() => navigation.replace("BottomTab")}
        name="close"
        type="AntDesign"
      />
      <Title>Welcome to Trek</Title>

      <SignInButtonStyled
        onPress={() => {
          profileStore.whoIsShowing = "SignIn";
          navigation.replace("Modal");
        }}
      >
        <Text>Sign in</Text>
      </SignInButtonStyled>
      <SignUpButtonStyled
        onPress={() => {
          profileStore.whoIsShowing = "SignUp";

          navigation.replace("Modal");
        }}
      >
        <Text>Sign Up</Text>
      </SignUpButtonStyled>
    </BackgroundImage>
  );
};

export default FirstTimeVisiting;

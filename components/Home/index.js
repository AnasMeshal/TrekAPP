import React from "react";

//Styles
import {
  CenterButton,
  SignInButtonStyled,
  SignUpButtonStyled,
  BackgroundImage,
  Title,
  SkipButtonStyled,
  SkipTextStyled,
} from "./styles";
import { Text } from "native-base";

//Stores
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const Home = ({ navigation }) => {
  //TODO: MOVE THIS TO DEFAULT PAGE IN NAVIGATION

  return (
    <BackgroundImage source={require("../../Signing.jpg")}>
      <Title>Welcome to Trek</Title>

      <SignInButtonStyled onPress={() => navigation.replace("Signin")}>
        <Text>Sign in</Text>
      </SignInButtonStyled>
      <SignUpButtonStyled onPress={() => navigation.replace("Signup")}>
        <Text>Sign up</Text>
      </SignUpButtonStyled>
      <SkipButtonStyled transparent onPress={() => navigation.replace("Trips")}>
        <SkipTextStyled>Skip Sign-In</SkipTextStyled>
      </SkipButtonStyled>
    </BackgroundImage>
  );
};

export default observer(Home);

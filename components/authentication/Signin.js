import React, { useState } from "react";
import { observer } from "mobx-react";

//Stores
import authStore from "../../stores/authStore";

//Styles
import {
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  AuthOther,
  BackgroundImage,
  SkipButtonStyled,
  SkipTextStyled,
} from "./styles";
import { Spinner } from "native-base";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  if (
    authStore.loading === true
    //TODO: BE SIGN IN/UP ERRORS && authStore.error !== ""
  )
    return (
      <BackgroundImage source={require("../../Signing.jpg")}>
        <Spinner color="orange" />
      </BackgroundImage>
    );

  const handleSubmit = async () => {
    if (!user.username) {
      setError("Please fill out your username");
    } else if (!user.password) {
      setError("Please fill out your password");
    }
    await authStore.signin(user);
    if (authStore.user) navigation.replace("Trips");
    if (authStore.user) setError("");
  };

  return (
    <BackgroundImage source={require("../../Signing.jpg")}>
      <AuthTitle>Sign in</AuthTitle>

      {/* <Text>{authStore.error}</Text> */}

      <AuthButtonText>{error}</AuthButtonText>

      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={false}
        autoCapitalize="none"
      />
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.replace("Signup")}>
        New to Trek? Sign up.
      </AuthOther>
      <SkipButtonStyled transparent onPress={() => navigation.replace("Trips")}>
        <SkipTextStyled>Skip Sign-In</SkipTextStyled>
      </SkipButtonStyled>
    </BackgroundImage>
  );
};

export default observer(Signin);

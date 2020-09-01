import React, { useState } from "react";

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
  X,
} from "./styles";
import { Spinner } from "native-base";
import { observer } from "mobx-react";
import profileStore from "../../stores/profileStore";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  if (authStore.loading === true)
    return (
      <BackgroundImage source={require("../../Signing.jpg")}>
        <Spinner color="orange" />
      </BackgroundImage>
    );
  const handleSubmit = async () => {
    if (!user.firstName) {
      setError("Please fill out your first name");
      // console.log(error);
    } else if (!user.lastName) {
      setError("Please fill out your last name");
    } else if (!user.email) {
      setError("Please fill out your email");
    } else if (!user.username) {
      setError("Please fill out your username");
    } else if (!user.password) {
      setError("Please fill out your password");
    }
    await authStore.signup(user);
    if (authStore.user) navigation.replace("BottomTab");
    if (authStore.user) setError("");
  };

  return (
    <BackgroundImage source={require("../../Signing.jpg")}>
      {/* 
       //TODO
      <Spinner />
      {authStore.loading && <Spinner />} */}
      <X
        onPress={() => navigation.replace("BottomTab")}
        name="close"
        type="AntDesign"
      />
      <AuthTitle>Sign up</AuthTitle>
      <AuthButtonText>{error}</AuthButtonText>
      <AuthTextInput
        onChangeText={(firstName) => setUser({ ...user, firstName })}
        placeholder="First Name"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={false}
        autoCapitalize="none"
      />
      <AuthTextInput
        onChangeText={(lastName) => setUser({ ...user, lastName })}
        placeholder="Last Name"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={false}
        autoCapitalize="none"
      />
      <AuthTextInput
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Email"
        type="email"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={false}
        autoCapitalize="none"
      />

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
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => (profileStore.whoIsShowing = "SignIn")}>
        Already have an account? Sign in.
      </AuthOther>
      <SkipButtonStyled transparent onPress={() => navigation.replace("Trips")}>
        <SkipTextStyled>Skip Sign-In</SkipTextStyled>
      </SkipButtonStyled>
    </BackgroundImage>
  );
};

export default observer(Signup);

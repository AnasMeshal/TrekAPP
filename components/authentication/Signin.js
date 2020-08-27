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
} from "./styles";
import { Text } from "native-base";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleLogOut = () => {
    authStore.signout();
    navigation.navigate("Home");
  };

  const handleBack = async () => {
    navigation.navigate("Trips");
  };

  const handleSubmit = async () => {
    if (!user.username) {
      setError("Please fill out your username");
    } else if (!user.password) {
      setError("Please fill out your password");
    }
    await authStore.signin(user);
    if (authStore.user) navigation.navigate("Trips");
    if (authStore.user) setError("");
  };

  if (authStore.user) {
    return (
      <BackgroundImage
        source={{
          uri:
            "https://i.pinimg.com/originals/81/fd/00/81fd00d4f4b7a7f5fe3049fbb4b668bc.jpg",
        }}
      >
        <AuthButton onPress={handleLogOut}>
          <AuthButtonText>Log Out</AuthButtonText>
        </AuthButton>
        <AuthButton onPress={handleBack}>
          <AuthButtonText>Back to Trips</AuthButtonText>
        </AuthButton>
      </BackgroundImage>
    );
  }

  return (
    <BackgroundImage
      source={{
        uri:
          "https://i.pinimg.com/originals/81/fd/00/81fd00d4f4b7a7f5fe3049fbb4b668bc.jpg",
      }}
    >
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
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        New to Trek? Sign up.
      </AuthOther>
    </BackgroundImage>
  );
};

export default observer(Signin);

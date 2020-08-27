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
} from "./styles";
import { Spinner } from "native-base";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

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
    if (authStore.user) navigation.navigate("Trips");
    if (authStore.user) setError("");
  };

  const handleLogOut = () => {
    authStore.signout();
    navigation.navigate("Home");
  };

  const handleBack = async () => {
    navigation.navigate("Trips");
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
      {/* 
       //TODO
      <Spinner />
      {authStore.loading && <Spinner />} */}
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
      <AuthOther onPress={() => navigation.navigate("Signin")}>
        Already have an account? Sign in.
      </AuthOther>
    </BackgroundImage>
  );
};

export default Signup;

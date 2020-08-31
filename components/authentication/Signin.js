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
      <BackgroundImage
        source={{
          uri:
            "https://i.pinimg.com/originals/81/fd/00/81fd00d4f4b7a7f5fe3049fbb4b668bc.jpg",
        }}
      >
        <Spinner color="orange" />
      </BackgroundImage>
    );

  const handleSubmit = async () => {
    if (!user.username) {
      setError("Please fill out your username");
    }
    if (!user.password) {
      setError("Please fill out your password");
    }

    /**
     * Having the else is an issue because what if the username isn't empty but the password is?
     * It won't set the error message for PW because the username isn't empty. So remove the else.
     */

    await authStore.signin(user);
    // combine the if-statements into one
    if (authStore.user) navigation.replace("Trips");
    if (authStore.user) setError("");
    // probably have an else that responds properly.
  };

  return (
    <BackgroundImage
      source={{
        uri:
          "https://i.pinimg.com/originals/81/fd/00/81fd00d4f4b7a7f5fe3049fbb4b668bc.jpg",
      }}
    >
      <AuthTitle>Sign in</AuthTitle>

      {/* remove this line */}
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
    </BackgroundImage>
  );
};

export default observer(Signin);

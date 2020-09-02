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
        <AuthButton onPress={() => navigation.goBack()}>
          <AuthButtonText>Try Again</AuthButtonText>
        </AuthButton>
      </BackgroundImage>
    );
  const handleSubmit = async () => {
    // again, remove the else's
    if (!user.firstName) {
      setError("Please fill out your first name");
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
    if (authStore.user) {
      navigation.replace("BottomTab");
      setError("");
    } else {
    }
  };

  return (
    <BackgroundImage source={require("../../Signing.jpg")}>
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

//TODO IMPLEMENT PROPER SIGN IN
/*import React, { useState } from "react";
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
/*
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

      // {/* remove this line }*/
// {/* <Text>{authStore.error}</Text> */}
/*
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
*/

import React, { useState } from "react";
import { observer } from "mobx-react";

//Buttons
import AddTripButton from "../buttons/AddTripButton";

//Components
import MyTripList from "../MyTripList";

//Stores
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";

//Styles
import {
  ProfileImage,
  ProfileName,
  ProfileBio,
  SignInOrSignUpButton,
  StyledText,
} from "./styles";

import {
  CenterButton,
  SignInButtonStyled,
  SignUpButtonStyled,
  BackgroundImage,
  Title,
  SkipButtonStyled,
  SkipTextStyled,
} from "./styles";
import { ScrollView } from "react-native";
import { Text } from "native-base";

const Profile = ({ navigation }) => {
  const { profile } = profileStore;

  const [updatedProfile, setUpdatedProfile] = useState({
    // name: profile.title,
    image: profile.image,
    bio: profile.bio,
    id: profile.id,
  });

  if (authStore.user) {
    return (
      <>
        <ScrollView>
          <ProfileImage
            source={{
              uri:
                "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png",
            }}
          />

          {/* TODO profile name
       <ProfileName
        maxLength={40}
        blurOnSubmit={true}
        multiline={true}
        placeholder={trip.title}
        placeholderTextColor="black"
        onChangeText={(title) =>
          setUpdatedProfile({ ...updatedProfile, title })
        }
        onEndEditing={async () => {
          await tripStore.tripUpdate(updatedProfile);
        }}
      /> */}
          <ProfileBio
            multiline={true}
            placeholder={profile.bio}
            placeholderTextColor="grey"
            onChangeText={(bio) =>
              setUpdatedProfile({ ...updatedProfile, bio })
            }
            onEndEditing={async () => {
              await profileStore.profileUpdate(updatedProfile);
            }}
          />
          <MyTripList isProfile navigation={navigation} />
        </ScrollView>
        <AddTripButton />
      </>
    );
  } else {
    return (
      <>
        <StyledText>
          You need to sign in or sign up to view your profile
        </StyledText>
        <SignInOrSignUpButton onPress={() => navigation.navigate("Signin")}>
          <Text>Sign in</Text>
        </SignInOrSignUpButton>
        {/* <BackgroundImage
          source={{
            uri:
              "https://i.pinimg.com/originals/81/fd/00/81fd00d4f4b7a7f5fe3049fbb4b668bc.jpg",
          }}
        >
          <Title>Welcome to Trek</Title>

          <SignInButtonStyled onPress={() => navigation.replace("Signin")}>
            <Text>Sign in</Text>
          </SignInButtonStyled>
          <SignUpButtonStyled onPress={() => navigation.replace("Signup")}>
            <Text>Sign up</Text>
          </SignUpButtonStyled>
        </BackgroundImage> */}
      </>
    );
  }
};

export default observer(Profile);

import React, { useState } from "react";
import { observer } from "mobx-react";

// Stores
import authStore from "../../stores/authStore";

// Buttons
import AddTripButton from "../buttons/AddTripButton";

// Components
import MyTripList from "../MyTripList";

// Stores
import profileStore from "../../stores/profileStore";

// Styles
import {
  ProfileImage,
  ProfileName,
  ProfileNames,
  ProfileBio,
  SignInOrSignUpButton,
  StyledText,
} from "./styles";
import { ScrollView } from "react-native";
import { Text, Toast, Root } from "native-base";

const Profile = ({ navigation }) => {
  if (!authStore.user) {
    return (
      <>
        <StyledText>
          You need to sign in or sign up to view your profile
        </StyledText>
        <SignInOrSignUpButton onPress={() => navigation.navigate("Modal")}>
          <Text>Sign in</Text>
        </SignInOrSignUpButton>
      </>
    );
  } else {
    const userProfile = authStore.user;
    const [updatedProfile, setUpdatedProfile] = useState({
      image: userProfile.profile.image || "defsauly",
      bio: userProfile.profile.bio || "defsauly",
      id: userProfile.profile.id,
    });

    return (
      <Root>
        <ScrollView>
          <ProfileImage
            source={{
              uri:
                "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png",
            }}
          />
          <ProfileName>{userProfile.username}</ProfileName>
          <ProfileNames>
            {userProfile.firstName} {userProfile.lastName}
          </ProfileNames>

          <ProfileBio
            multiline={true}
            placeholder={userProfile.profile.bio}
            placeholderTextColor="grey"
            onChangeText={(bio) =>
              setUpdatedProfile({ ...updatedProfile, bio })
            }
            onEndEditing={async () => {
              await profileStore.profileUpdate(updatedProfile);
              Toast.show({
                text: `Bio Has Been Changed to:
                ${updatedProfile.bio}`,
              });
            }}
          />
          <MyTripList isProfile navigation={navigation} />
        </ScrollView>
        <AddTripButton />
      </Root>
    );
  }
};

export default observer(Profile);

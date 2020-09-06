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
  FavoritesButton,
  FavoritesButtonText,
  ProfileImageButton,
  IconWrapper,
  IconStyled,
} from "./styles";
import { ScrollView } from "react-native";
import { Text, Toast, Button } from "native-base";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const Profile = ({ navigation }) => {
  if (!authStore.user) {
    return (
      <>
        <StyledText>Please Sign In or Sign Up to View your Profile!</StyledText>
        <SignInOrSignUpButton onPress={() => navigation.navigate("Modal")}>
          <Text>Sign in</Text>
        </SignInOrSignUpButton>
      </>
    );
  } else {
    const userProfile = authStore.user;
    const [updatedProfile, setUpdatedProfile] = useState({
      image: userProfile.profile.image,
      bio: userProfile.profile.bio,
      id: userProfile.profile.id,
    });

    const getPermissionAsync = async () => {
      if (Platform.OS !== "web") {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    };

    getPermissionAsync();

    const pickImage = async () => {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          // ImagePicker saves the taken photo to disk and returns a local URI to it
          let localUri = result.uri;
          let filename = localUri.split("/").pop();

          // Infer the type of the image
          let match = /\.(\w+)$/.exec(filename);
          let type = match ? `image/${match[1]}` : `image`;

          await profileStore.profileUpdate(
            {
              ...updatedProfile,
              image: { uri: localUri, name: filename, type },
            },
            {
              ...updatedProfile,
              image: result.uri,
            }
          );

          setUpdatedProfile({
            ...updatedProfile,
            image: result.uri,
          });
          Toast.show({
            text: "Updated Profile Picture",
            textStyle: {
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 20,
            },
            style: { backgroundColor: "#42d4f2e6" },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        <ScrollView>
          <ProfileImageButton transparent onPress={pickImage}>
            <ProfileImage
              source={{
                uri:
                  updatedProfile.image ||
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png",
              }}
            />
            <IconWrapper>
              <IconStyled type="Ionicons" name="add" />
            </IconWrapper>
          </ProfileImageButton>

          <ProfileName>{userProfile.username}</ProfileName>
          <ProfileNames>
            {userProfile.firstName} {userProfile.lastName}
          </ProfileNames>

          <ProfileBio
            multiline={true}
            placeholder={updatedProfile.bio}
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
          {/* // TODO ADD TO DRAWER */}
          <FavoritesButton onPress={() => navigation.navigate("Favorites")}>
            <FavoritesButtonText>View Your Favorite Trips</FavoritesButtonText>
          </FavoritesButton>
          <MyTripList isProfile navigation={navigation} />
        </ScrollView>
        <AddTripButton />
      </>
    );
  }
};

export default observer(Profile);

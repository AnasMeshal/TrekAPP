import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import TripList from "../TripList";

//Stores
import profileStore from "../../stores/profileStore";

//Styles
import { ProfileImage, ProfileName, ProfileBio } from "./styles";
import { ScrollView } from "react-native";

const Profile = () => {
  const { profile } = profileStore;

  const [updatedProfile, setUpdatedProfile] = useState({
    // name: profile.title,
    image: profile.image,
    bio: profile.bio,
    id: profile.id,
  });

  return (
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
        onChangeText={(bio) => setUpdatedProfile({ ...updatedProfile, bio })}
        onEndEditing={async () => {
          await profileStore.profileUpdate(updatedProfile);
        }}
      />
      <TripList isProfile />
    </ScrollView>
  );
};

export default observer(Profile);

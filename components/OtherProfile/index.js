import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import TripList from "../TripList";

//Stores
import profileStore from "../../stores/profileStore";

//Styles
import { ProfileImage, ProfileBio } from "./styles";
import { ScrollView } from "react-native";
import TripItem from "../TripList/TripItem";
import tripStore from "../../stores/tripStore";

// have only one profile component

const OtherProfile = ({ route, navigation }) => {
  const { notMyProfile } = route.params;

  const otherProfileTrips = tripStore.trips
    .filter((trip) => trip.userId === notMyProfile.userId)
    .map((trip) => (
      <TripItem trip={trip} navigation={navigation} key={trip.id} />
    ));

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
      <ProfileBio>{notMyProfile.bio}</ProfileBio>
      <TripList otherProfileTrips={otherProfileTrips} />
    </ScrollView>
  );
};

export default observer(OtherProfile);

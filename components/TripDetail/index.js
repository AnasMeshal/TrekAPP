import React, { useState } from "react";
import { observer } from "mobx-react";

//Stores
import tripStore from "../../stores/tripStore";
import profileStore from "../../stores/profileStore";

//Styles
import {
  TripImage,
  TripName,
  TripDetails,
  OtherTripName,
  OtherTripDetails,
  ProfileButton,
  ProfileButtonText,
} from "./styles";
import { ScrollView, Text } from "react-native";

const TripDetail = ({ route, navigation }) => {
  const { myTrip } = route.params;
  // console.log("TripDetail -> myTrip", myTrip);
  const { notMyTrip } = route.params;
  // console.log("TripDetail -> notMyTrip", notMyTrip);

  const isNotMyProfile = profileStore.notMyProfile;

  if (myTrip) {
    const [updatedTrip, setUpdatedTrip] = useState({
      title: myTrip.title,
      image: myTrip.image,
      details: myTrip.details,
      id: myTrip.id,
    });

    return (
      <ScrollView>
        <TripImage
          source={{
            uri:
              "https://static.toiimg.com/photo/msid-66440799,width-96,height-65.cms",
          }}
        />
        <TripName
          maxLength={40}
          blurOnSubmit={true}
          multiline={true}
          placeholder={myTrip.title}
          placeholderTextColor="black"
          onChangeText={(title) => setUpdatedTrip({ ...updatedTrip, title })}
          onEndEditing={async () => {
            await tripStore.tripUpdate(updatedTrip);
          }}
        />
        <TripDetails
          multiline={true}
          placeholder={myTrip.details}
          placeholderTextColor="grey"
          onChangeText={(details) =>
            setUpdatedTrip({ ...updatedTrip, details })
          }
          onEndEditing={async () => {
            await tripStore.tripUpdate(updatedTrip);
          }}
        />
      </ScrollView>
    );
  }

  return (
    <ScrollView>
      <TripImage
        source={{
          uri:
            "https://static.toiimg.com/photo/msid-66440799,width-96,height-65.cms",
        }}
      />
      <OtherTripName>{notMyTrip.title}</OtherTripName>
      <OtherTripDetails>{notMyTrip.details}</OtherTripDetails>
      <ProfileButton
        onPress={() =>
          navigation.navigate("OtherProfile", {
            defIsNotMyProfile: isNotMyProfile,
          })
        }
      >
        <ProfileButtonText>
          View {isNotMyProfile.user.username}'s Profile
        </ProfileButtonText>
      </ProfileButton>
    </ScrollView>
  );
};

export default observer(TripDetail);

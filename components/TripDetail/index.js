import React, { useState } from "react";
import { observer } from "mobx-react";

// Stores
import tripStore from "../../stores/tripStore";

// Styles
import {
  TripImage,
  TripName,
  TripDetails,
  OtherTripName,
  OtherTripDetails,
  ProfileButton,
  ProfileButtonText,
} from "./styles";
import { ScrollView } from "react-native";

const TripDetail = ({ route, navigation }) => {
  const { myTrip } = route.params;
  const { notMyTrip } = route.params;
  const { notMyProfile } = route.params;

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

  /**
   * TODO
   * I think you can set editable to false for TextInput.
   * By doing that, you don't need this if statement and two returns.
   * My comment is: Clean up this code.
   * Look into this: https://dev.to/skptricks/react-native-enable-and-disable-textinput-programmatically-1b99#:~:text=If%20the%20value%20of%20editable,now%20enter%20value%20inside%20it.
   */

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
            notMyProfile: notMyProfile,
          })
        }
      >
        <ProfileButtonText>
          View {notMyProfile.username}'s Profile
        </ProfileButtonText>
      </ProfileButton>
    </ScrollView>
  );
};

export default observer(TripDetail);

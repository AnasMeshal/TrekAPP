import React, { useState } from "react";
import { observer } from "mobx-react";

//Stores
import tripStore from "../../stores/tripStore";
import profileStore from "../../stores/profileStore";

//Styles
import { TripImage, TripName, TripDetails } from "./styles";
import { ScrollView, Text } from "react-native";
import { Button, Spinner } from "native-base";

const TripDetail = ({ route, navigation }) => {
  const { myTrip } = route.params;
  // remove console logs and commented code like this
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

  /**
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
      <Text>{notMyTrip.title}</Text>
      <Text>{notMyTrip.details}</Text>
      <Button
        onPress={() =>
          navigation.navigate("OtherProfile", {
            defIsNotMyProfile: isNotMyProfile,
          })
        }
      >
        <Text>View Profile {isNotMyProfile.id}</Text>
        {/* //TODO: ADD PROFILE NAME
        <Text>{isNotMyProfile.id}</Text> */}
      </Button>
    </ScrollView>
  );
};

export default observer(TripDetail);

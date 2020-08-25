import React, { useState } from "react";

//Styles
import { TripImage, TripName, TripDetails } from "./styles";
import { ScrollView } from "react-native";
import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";

const TripDetail = ({ route }) => {
  const { trip } = route.params;

  const [updatedTrip, setUpdatedTrip] = useState({
    title: trip.title,
    image: trip.image,
    details: trip.details,
    id: trip.id,
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
        placeholder={trip.title}
        placeholderTextColor="black"
        onChangeText={(title) => setUpdatedTrip({ ...updatedTrip, title })}
        onEndEditing={async () => {
          await tripStore.tripUpdate(updatedTrip);
          console.log("TripDetail -> updatedTrip", updatedTrip);
          console.log("TripDetail -> trip", trip);
        }}
      />
      <TripDetails
        multiline={true}
        placeholder={trip.details}
        placeholderTextColor="grey"
        onChangeText={(details) => setUpdatedTrip({ ...updatedTrip, details })}
        onEndEditing={async () => {
          await tripStore.tripUpdate(updatedTrip);
          console.log("TripDetail -> updatedTrip", updatedTrip);
          console.log("TripDetail -> trip", trip);
        }}
      />
    </ScrollView>
  );
};

export default observer(TripDetail);

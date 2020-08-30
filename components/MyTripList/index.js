import React from "react";
import { observer } from "mobx-react";

//Styles
import { List, View } from "native-base";

//Stores
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";
import authStore from "../../stores/authStore";

const TripList = ({ navigation, isProfile, otherProfileTrips }) => {
  if (!authStore.user) return null;
  //TODO RETURN NICE MESSAGE

  const profileTrips = tripStore.trips
    .filter((trip) => trip.userId === authStore.user.id)
    .map((trip) => (
      <TripItem isProfile trip={trip} navigation={navigation} key={trip.id} />
    ));

  return (
    <View>
      <List>{profileTrips}</List>
    </View>
  );
};

export default observer(TripList);

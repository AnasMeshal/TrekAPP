import React from "react";
import { observer } from "mobx-react";

//Styles
import { List, Content, View } from "native-base";

//Stores
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";
import AddTripButton from "../buttons/AddTripButton";
import authStore from "../../stores/authStore";

const TripList = ({ navigation, isProfile }) => {
  const profileTrips = tripStore.trips
    .filter((trip) => trip.userId === authStore.user.id)
    .map((trip) => (
      <TripItem isProfile trip={trip} navigation={navigation} key={trip.id} />
    ));

  const exploreTrips = tripStore.trips
    .filter((trip) => trip.userId !== authStore.user.id)
    .map((trip) => (
      <TripItem trip={trip} navigation={navigation} key={trip.id} />
    ));

  if (isProfile) {
    return (
      <>
        <View>
          <List>{profileTrips}</List>
        </View>
        <AddTripButton />
      </>
    );
  }

  return (
    <>
      <Content>
        <View>
          <List>{exploreTrips}</List>
        </View>
      </Content>
    </>
  );
};

export default observer(TripList);

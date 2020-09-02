import React from "react";
import { observer } from "mobx-react";

// Styles
import { List, Content, View } from "native-base";

// Stores
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem"; // not a store, move it elsewhere
import AddTripButton from "../buttons/AddTripButton"; // unused import, remove it
import authStore from "../../stores/authStore";

const TripList = ({ navigation, otherProfileTrips }) => {
  // the .map() is repeated
  // remove the condition here
  // add an if-statement below
  // if authStore.user then apply .filter()
  // TODO
  // const exploreTrips = tripStore.trips.if (authStore.user) {filter((trip) => trip.userId !== authStore.user.id)}.map((trip) => (
  //   <TripItem trip={trip} navigation={navigation} key={trip.id} />
  // ))

  const exploreTrips = authStore.user
    ? tripStore.trips
        .filter((trip) => trip.userId !== authStore.user.id)
        .map((trip) => (
          <TripItem trip={trip} navigation={navigation} key={trip.id} />
        ))
    : tripStore.trips.map((trip) => (
        <TripItem trip={trip} navigation={navigation} key={trip.id} />
      ));

  return (
    <Content>
      <View>
        {/* TODO how to optimize this? */}
        <List>{otherProfileTrips ? otherProfileTrips : exploreTrips}</List>
      </View>
    </Content>
  );
};

export default observer(TripList);

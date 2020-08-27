import React from "react";
import { observer } from "mobx-react";

//Styles
import { List, Content, View } from "native-base";

//Stores
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";
import AddTripButton from "../buttons/AddTripButton";
import authStore from "../../stores/authStore";

const TripList = ({ navigation }) => {
  const filteredTrip = tripStore.trips
    .filter((trip) => trip.userId === authStore.user.id)
    .map((trip) => (
      <TripItem trip={trip} navigation={navigation} key={trip.id} />
    ));

  return (
    <>
      <Content>
        <View>
          <List>{filteredTrip}</List>
        </View>
      </Content>
      <AddTripButton />
    </>
  );
};

export default observer(TripList);

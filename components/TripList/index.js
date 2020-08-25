import React from "react";
import { observer } from "mobx-react";

//Styles
import { List, Content } from "native-base";

//Stores
import tripStore from "../../stores/tripStore";
import TripItem from "../TripItem";

const TripList = ({ navigation }) => {
  const filteredTrip = tripStore.trips.map((trip) => (
    <TripItem trip={trip} navigation={navigation} key={trip.id} />
  ));

  return (
    <Content>
      <List>{filteredTrip}</List>
    </Content>
  );
};

export default observer(TripList);

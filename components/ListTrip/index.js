import React from "react";
import { observer } from "mobx-react";

// Components
import ListTripItem from "./ListTripItem";

// Stores
import tripStore from "../../stores/tripStore";

// Styles
import { Content, View, List } from "native-base";

const ListTrip = ({ listTrip, navigation }) => {
  console.log("-------------------------------------------");
  const TripsOfList = listTrip.map((trip) => tripStore.getTripById(trip.id));
  console.log(
    "ListTrip -----------------------------> TripsOfList",
    TripsOfList
  );
  const Trips = TripsOfList.map((trip) => (
    <ListTripItem trip={trip} navigation={navigation} key={trip.id} />
  ));

  return (
    <Content>
      <View>
        <List>{Trips}</List>
      </View>
    </Content>
  );
};

export default observer(ListTrip);

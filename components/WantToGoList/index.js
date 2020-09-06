import React from "react";
import { observer } from "mobx-react";

// Components
import WantToGoTrip from "../WantToGoTrip";

// Styles
import { Content, List } from "native-base";

// Stores
import listStore from "../../stores/listStore";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";

const WantToGoList = ({ navigation }) => {
  const wantToGo = listStore.lists.find(
    (list) => list.name === "Want To Go" && list.userId === authStore.user.id
  );

  if (wantToGo) {
    const WantToGoTrips = wantToGo.trips.map((trip) =>
      tripStore.getTripById(trip.id)
    );

    const trips = WantToGoTrips.map((trip) => (
      <WantToGoTrip wantToGo={wantToGo} trip={trip} navigation={navigation} />
    ));

    return (
      <Content>
        <List>{trips}</List>
      </Content>
    );
  }
};

export default observer(WantToGoList);

import React from "react";
import { View, Text } from "native-base";
import { observer } from "mobx-react";

// Component
import ListTrip from "../ListTrip";

// Stores
import listStore from "../../stores/listStore";
import authStore from "../../stores/authStore";

const ListDetail = ({ navigation }) => {
  const listTrip = listStore.lists
    .filter(
      (list) => list.userId === authStore.user.id && list.name !== "Want To Go"
    )
    .map((list) => (
      <ListTrip listTrip={list.trips} navigation={navigation} key={list.id} />
    ));
  return <View>{listTrip}</View>;
};

export default observer(ListDetail);

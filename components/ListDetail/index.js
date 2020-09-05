import React, { useState } from "react";
import { observer } from "mobx-react";

// Component
import ListTrip from "../ListTrip";

// Styles
import { Content, View, List } from "native-base";
import { ListName } from "./styles";

// Stores
import tripStore from "../../stores/tripStore";
import listStore from "../../stores/listStore";

const ListDetail = ({ route, navigation }) => {
  const { list } = route.params;

  const [updatedList, setUpdatedList] = useState({
    name: list.name,
    id: list.id,
  });

  const trips = list.trips.map((trip) => tripStore.getTripById(trip.id));

  const tripOfList = trips.map((trip) => (
    <ListTrip trip={trip} navigation={navigation} key={trip.id} />
  ));

  return (
    <Content>
      <View>
        <ListName
          maxLength={37}
          blurOnSubmit={true}
          multiline={true}
          placeholder={list.name}
          placeholderTextColor="black"
          onChangeText={(name) => setUpdatedList({ ...updatedList, name })}
          onEndEditing={async () => {
            await listStore.listUpdate(updatedList);
          }}
        />
        <List>{tripOfList}</List>
      </View>
    </Content>
  );
};

export default observer(ListDetail);

import React, { useState } from "react";
import { observer } from "mobx-react";

// Component
import ListTrip from "../ListTrip";

// Styles
import { Content, View, List } from "native-base";
import {
  ListNameInput,
  ListNameText,
  ProfileButton,
  ProfileButtonText,
} from "./styles";

// Stores
import tripStore from "../../stores/tripStore";
import listStore from "../../stores/listStore";

const ListDetail = ({ route, navigation }) => {
  const { list } = route.params;

  const [updatedList, setUpdatedList] = useState({
    name: list.name,
    id: list.id,
  });
  const [editable, setEditable] = useState(false);
  const trips = list.trips.map((trip) => tripStore.getTripById(trip.id));

  const tripOfList = trips.map((trip) => (
    <ListTrip list={list} trip={trip} navigation={navigation} key={trip.id} />
  ));

  return (
    <Content>
      <View>
        {editable ? (
          <ListNameInput
            maxLength={37}
            blurOnSubmit={true}
            multiline={true}
            placeholder={list.name}
            placeholderTextColor="grey"
            onChangeText={(name) => setUpdatedList({ ...updatedList, name })}
            onEndEditing={async () => {
              await listStore.listUpdate(updatedList);
            }}
          />
        ) : (
          <ListNameText>{list.name}</ListNameText>
        )}
        <List>{tripOfList}</List>
        <ProfileButton onPress={() => setEditable(!editable)}>
          <ProfileButtonText>
            {editable ? "Apply Edits" : "Edit List"}
          </ProfileButtonText>
        </ProfileButton>
      </View>
    </Content>
  );
};

export default observer(ListDetail);

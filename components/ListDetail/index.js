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
  NoFavoritesText,
  NoFavoritesMsg,
} from "./styles";

import { ScrollView } from "react-native";

// Stores
import tripStore from "../../stores/tripStore";
import listStore from "../../stores/listStore";

const ListDetail = ({ route, navigation }) => {
  const [editable, setEditable] = useState(false);
  const { list } = route.params;
  const [updatedList, setUpdatedList] = useState({
    name: list.name,
    id: list.id,
  });

  let tripOfList = [];

  if (list.trips) {
    const trips = list.trips.map((trip) => tripStore.getTripById(trip.id));

    tripOfList = trips.map((trip) => (
      <ListTrip list={list} trip={trip} navigation={navigation} key={trip.id} />
    ));
  }

  return tripOfList.length > 0 ? (
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
  ) : (
    <ScrollView>
      <NoFavoritesText>This List Has No Trips</NoFavoritesText>
      <NoFavoritesMsg>
        Please add Trips to this List from Their Detail Views
      </NoFavoritesMsg>
    </ScrollView>
  );
};

export default observer(ListDetail);

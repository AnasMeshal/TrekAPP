import React from "react";
import { observer } from "mobx-react";

// Components
import ListItems from "./ListItems";

// Styles
import { Content, List } from "native-base";
import { NoFavoritesText, NoFavoritesMsg } from "./styles";
import { ScrollView } from "react-native";

// Stores
import listStore from "../../stores/listStore";
import authStore from "../../stores/authStore";

const Lists = ({ navigation }) => {
  const listList = listStore.lists
    .filter(
      (list) => list.name !== "Want To Go" && list.userId === authStore.user.id
    )
    .map((list) => (
      <ListItems list={list} navigation={navigation} key={list.id} />
    ));

  return listList.length > 0 ? (
    <Content>
      <List>{listList}</List>
    </Content>
  ) : (
    <ScrollView>
      <NoFavoritesText>You Have No Lists</NoFavoritesText>
      <NoFavoritesMsg>
        Please use the Add Button Above to Create Your First List
      </NoFavoritesMsg>
    </ScrollView>
  );
};

export default observer(Lists);

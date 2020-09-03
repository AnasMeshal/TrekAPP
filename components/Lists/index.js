import React from "react";
import { observer } from "mobx-react";

// Components
import ListItems from "./ListItems";

// Styles

import { Content, List } from "native-base";
// Stores
import listStore from "../../stores/listStore";
import authStore from "../../stores/authStore";

const Lists = ({ navigation }) => {
  const listList = listStore.lists
    .filter(
      (list) => list.userId === authStore.user.id && list.name !== "Want To Go"
    )
    .map((list) => (
      <ListItems list={list} navigation={navigation} key={list.id} />
    ));
  if (listList) {
    return (
      <Content>
        <List>{listList}</List>
      </Content>
    );
  }

  return <Text>Currently you don't have any list, Create one!</Text>;
};

export default observer(Lists);

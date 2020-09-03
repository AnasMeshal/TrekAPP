import React from "react";
import { observer } from "mobx-react";

// Styles
import { ListItem, Text, Left, Right, Icon } from "native-base";
import ListDetail from "../ListDetail";

const ListItems = ({ list, navigation }) => {
  console.log(
    "ListItems ====================================================-> list",
    list
  );

  return (
    <ListItem onPress={() => navigation.navigate("List Detail")}>
      <Left>
        <Text>{list.name}</Text>
      </Left>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  );
};

export default observer(ListItems);

import React from "react";
import { observer } from "mobx-react";

// Styles
import { ListItem, Text, Left, Right, Icon } from "native-base";
import Swipeout from "react-native-swipeout";
import listStore from "../../stores/listStore";
import { Alert } from "react-native";

const ListItems = ({ list, navigation }) => {
  const swipeoutBtns = [
    {
      text: "Delete",
      backgroundColor: "red",
      underlayColor: "rgba(0, 0, 0, 1, 0.6)",
      onPress: async () => {
        Alert.alert(
          "Delete List",
          "Are you sure you want to delete this list",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "Delete List",
              onPress: async () => {
                // TODO FIX LOGOUT AND BE CONSOLE WARNING
                await listStore.listDelete(list.id);
              },
            },
          ],
          { cancelable: false }
        );
      },
    },
  ];

  return (
    <Swipeout
      backgroundColor="transparent"
      right={swipeoutBtns}
      buttonWidth={100}
    >
      <ListItem
        onPress={() => navigation.navigate("List Detail", { list: list })}
      >
        <Left>
          <Text>{list.name}</Text>
        </Left>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    </Swipeout>
  );
};

export default observer(ListItems);

import React from "react";
import { observer } from "mobx-react";

// Styles
import { StyledThreeDots } from "./styles";
import { ActionSheet, Toast } from "native-base";

// Stores
import listStore from "../../stores/listStore";
import authStore from "../../stores/authStore";

const AddTripToListButton = ({ notMyTrip, myTrip }) => {
  if (authStore.user) {
    const listName = listStore.lists.filter(
      (list) => list.name !== "Want To Go" && list.userId === authStore.user.id
    );
    const listId = listName.map((list) => list.id);
    const Buttons = listName.map((list) => list.name);
    Buttons.push("Cancel");
    const Cancel = Buttons.length - 1;

    const handleAddTripToList = async (listId, tripId) => {
      await listStore.addTripToList(listId, tripId);
    };

    return (
      <StyledThreeDots
        type="MaterialCommunityIcons"
        name="dots-horizontal"
        onPress={() =>
          ActionSheet.show(
            {
              options: Buttons,
              cancelButtonIndex: Cancel,

              title: "What List Would You Like to Add this to?",
            },
            async (buttonIndex) => {
              if (buttonIndex !== Buttons.length - 1) {
                await handleAddTripToList(
                  listId[buttonIndex],
                  myTrip !== undefined ? myTrip.id : notMyTrip.id
                );
                Toast.show({
                  text: `Added to ${Buttons[buttonIndex]}`,
                  textStyle: {
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 20,
                  },
                  style: { backgroundColor: "#42d4f2e6" },
                  position: "bottom",
                });
              }
            }
          )
        }
      />
    );
  }
};

export default observer(AddTripToListButton);

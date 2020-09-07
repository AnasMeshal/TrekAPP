import React, { useState } from "react";

// Styles
import {
  Icon,
  ActionSheet,
  Container,
  Header,
  Content,
  Toast,
} from "native-base";

// Components
import { useNavigation } from "@react-navigation/native";
import { FilterStyled, SortButtonStyled } from "./styles";
import { DangerZone } from "expo";

const SortButton = ({ setSort, sort }) => {
  const Buttons = [
    "Favorites",
    "Most Lists",
    "Questions & Answers",
    "Alphabetical Order",
    "Remove Sortings",
    "Cancel",
  ];
  const Cancel = 5;
  const Destruct = 4;

  // console.log("FilterButton -> route", route);
  // console.log("FilterButton -> route", route);
  // const filter = navigation.getParam("filter", "FAAAAAIL");
  // console.log("FilterButton -> filter", filter);
  // const setFilter = navigation.getParam("setFilter", "SETFAAAAAIL");
  // console.log("FilterButton -> setFilter", setFilter);
  // TODO FIX TO REMOVE FILTERS
  return (
    <SortButtonStyled
      small
      primary
      onPress={() =>
        ActionSheet.show(
          {
            options: Buttons,
            cancelButtonIndex: Cancel,
            destructiveButtonIndex: Destruct,
            title: "What Would You Like to Sort by?",
          },
          (buttonIndex) => {
            setSort(Buttons[buttonIndex]);
            if (buttonIndex !== 5) {
              if (buttonIndex === 4) {
                Toast.show({
                  text: `Removed Sortings`,
                  type: "danger",
                  textStyle: {
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 20,
                  },
                });
              } else {
                Toast.show({
                  text: `Sorted Trips by ${Buttons[buttonIndex]}`,
                  textStyle: {
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 20,
                  },
                  style: { backgroundColor: "#42d4f2e6" },
                });
              }
            }
          }
        )
      }
    >
      <FilterStyled>Sort Trips</FilterStyled>
      <Icon name="arrow-down" style={{ color: "white" }} />
    </SortButtonStyled>
  );
};

export default SortButton;

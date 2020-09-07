import React, { useState } from "react";

// Styles
import { Icon, ActionSheet, Toast } from "native-base";

// Components
import { FilterStyled, FilterButtonStyled } from "./styles";

const FilterButton = ({ setFilter, filter }) => {
  const Buttons = [
    "Favorites",
    "Included in Lists",
    "Questions & Answers",
    "Remove Filters",
    "Cancel",
  ];
  const Cancel = 4;
  const Destruct = 3;

  // console.log("FilterButton -> route", route);
  // console.log("FilterButton -> route", route);
  // const filter = navigation.getParam("filter", "FAAAAAIL");
  // console.log("FilterButton -> filter", filter);
  // const setFilter = navigation.getParam("setFilter", "SETFAAAAAIL");
  // console.log("FilterButton -> setFilter", setFilter);
  // TODO FIX TO REMOVE FILTERS
  return (
    <FilterButtonStyled
      small
      primary
      onPress={() =>
        ActionSheet.show(
          {
            options: Buttons,
            cancelButtonIndex: Cancel,
            destructiveButtonIndex: Destruct,
            title: "What Would You Like to Filter by?",
          },
          (buttonIndex) => {
            setFilter(Buttons[buttonIndex]);
            if (buttonIndex !== 4) {
              if (buttonIndex === 3) {
                Toast.show({
                  text: `Removed Filters`,
                  type: "danger",
                  textStyle: {
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 20,
                  },
                });
              } else {
                Toast.show({
                  text: `Filtered Trips by ${Buttons[buttonIndex]}`,
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
      <FilterStyled>Filter Trips</FilterStyled>
      <Icon name="arrow-down" style={{ color: "white" }} />
    </FilterButtonStyled>
  );
};

export default FilterButton;

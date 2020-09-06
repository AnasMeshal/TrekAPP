import React from "react";

// Styles
import { AddListButtonStyle } from "./styles";
import { useNavigation } from "@react-navigation/native";

const AddListButton = () => {
  const navigation = useNavigation();
  return (
    <AddListButtonStyle
      type="Ionicons"
      name="add"
      onPress={() => navigation.navigate("Add List")}
    />
  );
};

export default AddListButton;

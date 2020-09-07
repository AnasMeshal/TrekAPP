import React from "react";

// Styles
import { GoBackIcon } from "./styles";
import { useNavigation } from "@react-navigation/native";

const GoBackButton = () => {
  const navigation = useNavigation();
  return (
    <GoBackIcon
      onPress={() => navigation.goBack()}
      type="Entypo"
      name="chevron-thin-left"
      color="white"
    />
  );
};

export default GoBackButton;

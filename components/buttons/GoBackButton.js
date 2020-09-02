import React from "react";
import { useNavigation } from "@react-navigation/native";

// Styles
import { GoBackIcon } from "./styles";

const GoBackButton = () => {
  const navigation = useNavigation();
  return (
    <GoBackIcon
      type="Entypo"
      name="chevron-thin-left"
      onPress={navigation.goBack}
      color="white"
    />
  );
};

export default GoBackButton;

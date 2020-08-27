import React from "react";
import { useNavigation } from "@react-navigation/native";

//Styles
import { TempButtonStyled } from "./styles";

const TempButton = () => {
  const navigation = useNavigation();
  return (
    <TempButtonStyled
      type="FontAwesome5"
      name="user-circle"
      onPress={() => navigation.navigate("Profile")}
      color="white"
    />
  );
};

export default TempButton;

import React from "react";
import { useNavigation } from "@react-navigation/native";

// Styles
import { IconStyled, IconWrapper } from "./styles";

const AddTripButton = () => {
  const navigation = useNavigation();

  return (
    <IconWrapper onPress={() => navigation.navigate("AddTrip")}>
      <IconStyled type="Ionicons" name="add" />
    </IconWrapper>
  );
};

export default AddTripButton;

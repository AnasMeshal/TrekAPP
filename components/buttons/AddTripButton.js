import React from "react";
import { useNavigation } from "@react-navigation/native";

//Styles
import { IconStyled } from "./styles";

const AddTripButton = () => {
  const navigation = useNavigation();

  return (
    <IconStyled
      onPress={() => navigation.navigate("AddTrip")}
      type="Ionicons"
      name="add"
    />
  );
};

export default AddTripButton;

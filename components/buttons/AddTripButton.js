import React from "react";
import { useNavigation } from "@react-navigation/native";

// Styles
import { IconStyled, IconWrapper } from "./styles";

const AddTripButton = () => {
  const navigation = useNavigation();

  return (
    <IconWrapper>
      <IconStyled
        onPress={() => navigation.navigate("AddTrip")}
        type="Ionicons"
        name="add"
      />
    </IconWrapper>
  );
};

export default AddTripButton;

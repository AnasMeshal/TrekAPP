import React from "react";
import { useNavigation } from "@react-navigation/native";

// Styles
import { IconStyled, IconWrapper } from "./styles";

const MapsButton = ({ notMyProfile }) => {
  const navigation = useNavigation();

  return (
    <IconWrapper>
      <IconStyled
        onPress={() =>
          navigation.navigate("AllMarkers", { notMyProfile: notMyProfile })
        }
        type="Ionicons"
        name="ios-map"
      />
    </IconWrapper>
  );
};

export default MapsButton;

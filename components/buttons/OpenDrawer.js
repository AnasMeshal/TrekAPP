import React from "react";
import { useNavigation } from "@react-navigation/native";

// Styles
import { OpenDrawerIcon } from "./styles";

const OpenDrawer = () => {
  const navigation = useNavigation();
  return (
    <OpenDrawerIcon
      type="AntDesign"
      name="bars"
      onPress={() => navigation.openDrawer()}
    />
  );
};

export default OpenDrawer;

import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

// Styles
import { OpenDrawerIcon } from "./styles";
import authStore from "../../stores/authStore";

const OpenDrawer = () => {
  const navigation = useNavigation();
  if (authStore.user) {
    return (
      <OpenDrawerIcon
        type="AntDesign"
        name="bars"
        onPress={() => navigation.openDrawer()}
      />
    );
  }
};
export default observer(OpenDrawer);

import React, { useState } from "react";
import { LogOutStyled } from "./styles";
import authStore from "../../stores/authStore";
import { Alert } from "react-native";
import { useNavigation, NavigationActions } from "@react-navigation/native";
import { observer } from "mobx-react";

const LogOutButton = () => {
  const handleLogOut = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Log Out",
          onPress: async () => {
            await authStore.signout();
          },
        },
      ],
      { cancelable: false }
    );
  };
  if (authStore.user)
    return (
      <LogOutStyled
        type="SimpleLineIcons"
        name="logout"
        onPress={handleLogOut}
      />
    );
};

export default observer(LogOutButton);

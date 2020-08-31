import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Modal from "../Modal";
import FirstTimeVisiting from "../FirstTimeVisiting";

//Navigation
import BottomTab from "./BottomTab";

//Stores
import authStore from "../../stores/authStore";

const { Navigator, Screen } = createStackNavigator();

const Main = () => {
  return (
    <Navigator
      headerMode="none"
      mode="modal"
      initialRouteName={
        authStore.user === null ? "FirstTimeVisiting" : "BottomTab"
      }
    >
      <Screen
        name="BottomTab"
        component={BottomTab}
        options={{ animationTypeForReplace: "pop" }}
      />
      <Screen name="Modal" component={Modal} />
      <Screen name="FirstTimeVisiting" component={FirstTimeVisiting} />
    </Navigator>
  );
};

export default Main;

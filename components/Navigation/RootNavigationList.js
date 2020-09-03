import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

// Components
import Lists from "../Lists";
import ListDetail from "../ListDetail";

// Buttons
import OpenDrawer from "../buttons/OpenDrawer";
import GoBackButton from "../buttons/GoBackButton";

const { Navigator, Screen } = createStackNavigator();

const RootNavigationList = () => {
  return (
    <Navigator
      initialRouteName="Lists"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#42d4f2",
        },
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <Screen
        name="Lists"
        component={Lists}
        options={{
          title: "Lists",
          headerRight: () => <OpenDrawer />,
        }}
      />

      <Screen
        name="List Detail"
        component={ListDetail}
        options={{ headerLeft: () => <GoBackButton /> }}
      />
    </Navigator>
  );
};

export default observer(RootNavigationList);

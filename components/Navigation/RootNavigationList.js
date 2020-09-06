import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

// Components
import Lists from "../Lists";
import ListDetail from "../ListDetail";
import TripDetail from "../TripDetail";
import AddList from "../AddList";

// Buttons
import OpenDrawer from "../buttons/OpenDrawer";
import GoBackButton from "../buttons/GoBackButton";
import AddListButton from "../buttons/AddListButton";
import AddTripToListButton from "../buttons/AddTripToListButton";

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
          headerLeft: () => <AddListButton />,
          headerRight: () => <OpenDrawer />,
        }}
      />

      <Screen
        name="List Detail"
        component={ListDetail}
        options={{
          headerLeft: () => <GoBackButton />,
        }}
      />
      <Screen
        name="Trip Detail"
        component={TripDetail}
        options={{
          headerRight: () => <AddTripToListButton />,
          headerLeft: () => <GoBackButton />,
        }}
      />

      <Screen
        name="Add List"
        component={AddList}
        options={{
          headerLeft: () => <GoBackButton />,
        }}
      />
    </Navigator>
  );
};

export default observer(RootNavigationList);

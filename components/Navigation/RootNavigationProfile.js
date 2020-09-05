import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

// Components
import AddTrip from "../AddTrip";
import Profile from "../Profile";
import TripDetail from "../TripDetail";
import Maps from "../geolocation/maps";

// Buttons
import GoBackButton from "../buttons/GoBackButton";
import LogOutButton from "../buttons/LogOutButton";
import OpenDrawer from "../buttons/OpenDrawer";

const { Navigator, Screen } = createStackNavigator();

const RootNavigatorProfile = () => {
  return (
    <Navigator
      initialRouteName="Profile"
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
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerRight: () => <OpenDrawer />,
          headerLeft: () => <LogOutButton />,
        }}
      />

      <Screen
        name="AddTrip"
        component={AddTrip}
        options={{
          title: "Add a Trip",
          headerLeft: () => <GoBackButton />,
        }}
      />

      <Screen
        name="Trip Detail"
        component={TripDetail}
        options={({ route }) => {
          const { myTrip } = route.params;
          return {
            title: myTrip.title,
            headerLeft: () => <GoBackButton />,
          };
        }}
      />
      <Screen
        name="map"
        component={Maps}
        options={({ route }) => {
          const { myTrip } = route.params;
          return {
            headerShown: false,
          };
        }}
      />
    </Navigator>
  );
};

export default observer(RootNavigatorProfile);

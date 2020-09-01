import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

// Components
import AddTrip from "../AddTrip";
import Profile from "../Profile";
import TripDetail from "../TripDetail";

// Buttons
import GoBackButton from "../buttons/GoBackButton";
import LogOutButton from "../buttons/LogOutButton";

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
          headerRight: null,
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
          const { notMyTrip } = route.params;
          const { myTrip } = route.params;
          return {
            title: myTrip ? myTrip.title : notMyTrip.title,
            headerLeft: () => <GoBackButton />,
          };
        }}
      />
    </Navigator>
  );
};

export default observer(RootNavigatorProfile);

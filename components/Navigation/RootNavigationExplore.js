import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

// Components
import Home from "../Home";
import TripList from "../TripList";
import AddTrip from "../AddTrip";
import OtherProfile from "../OtherProfile";
import TripDetail from "../TripDetail";

// Buttons
import GoBackButton from "../buttons/GoBackButton";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Trips"
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
        name="Trips"
        component={TripList}
        options={{
          title: "Explore Trips",
          headerLeft: () => null,
        }}
      />
      <Screen
        name="OtherProfile"
        component={OtherProfile}
        options={({ route }) => {
          const { notMyProfile } = route.params;
          return {
            title: notMyProfile.username,
            headerStyle: {
              backgroundColor: "#42d4f2",
            },
            headerTitleStyle: {
              color: "white",
            },
            headerLeft: () => <GoBackButton />,
          };
        }}
      />
      <Screen
        name="Trip Detail"
        component={TripDetail}
        options={({ route }) => {
          const { notMyTrip } = route.params;
          const { notMyProfile } = route.params;
          return {
            title: notMyTrip.title,
            headerLeft: () => <GoBackButton />,
          };
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
    </Navigator>
  );
};

export default observer(RootNavigator);

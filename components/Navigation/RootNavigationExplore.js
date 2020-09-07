import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";
import AllMarkers from "../geolocation/AllMarkers";

// Components
import TripList from "../TripList";
import AddTrip from "../AddTrip";
import OtherProfile from "../OtherProfile";
import TripDetail from "../TripDetail";

// Buttons
import GoBackButton from "../buttons/GoBackButton";
import authStore from "../../stores/authStore";
import Maps from "../geolocation/maps";

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
          return {
            //TODO MARKDOWN
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
      <Screen
        name="AllMarkers"
        component={AllMarkers}
        options={({ route }) => {
          return {
            headerShown: false,
          };
        }}
      />
      <Screen
        name="map"
        component={Maps}
        options={({ route }) => {
          return {
            headerShown: false,
          };
        }}
      />
    </Navigator>
  );
};

export default observer(RootNavigator);

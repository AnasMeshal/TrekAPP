import React from "react";
import { observer } from "mobx-react";
import AllMarkers from "../geolocation/AllMarkers";

// TODO POSSIBLY DELETE ORIGINAL NAVIGATOR

// Components
import TripList from "../TripList";
import AddTrip from "../AddTrip";
import OtherProfile from "../OtherProfile";
import TripDetail from "../TripDetail";

// Buttons
import GoBackButton from "../buttons/GoBackButton";
import authStore from "../../stores/authStore";
import Maps from "../geolocation/maps";

// Amazing Stack Navigator
import { createNativeStackNavigator } from "react-native-screens/native-stack";

import AddTripToListButton from "../buttons/AddTripToListButton";

// Navigation

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
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
      <Stack.Screen
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
            headerTintColor: "white",
            headerBackTitleVisible: false,
            // headerLeft: () => <GoBackButton navigation={navigation} />,
          };
        }}
      />

      <Stack.Screen
        name="Trip Detail"
        component={TripDetail}
        options={({ route }) => {
          const { notMyTrip } = route.params;
          return {
            //TODO MARKDOWN
            title: notMyTrip.title,
            headerTintColor: "white",
            headerBackTitleVisible: false,
            // headerLeft: () => <GoBackButton navigation={navigation} />,
            headerRight: () => <AddTripToListButton notMyTrip={notMyTrip} />,
          };
        }}
      />
      <Stack.Screen
        name="AddTrip"
        component={AddTrip}
        options={{
          title: "Add a Trip",
          headerTintColor: "white",
          headerBackTitleVisible: false,
          // headerLeft: () => <GoBackButton navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Trips"
        component={TripList}
        options={{
          title: "Explore Trips",
          headerLargeTitle: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default observer(RootNavigator);

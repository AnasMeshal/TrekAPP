import React from "react";
import { observer } from "mobx-react";

// Components
import Search from "../Search";
import TripDetail from "../TripDetail";
import OtherProfile from "../OtherProfile";

// Amazing Stack Navigator
import { createNativeStackNavigator } from "react-native-screens/native-stack";

// Buttons
import AddTripToListButton from "../buttons/AddTripToListButton";

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
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Trip Detail"
        component={TripDetail}
        options={({ route }) => {
          const { myTrip } = route.params;
          const { notMyTrip } = route.params;
          return {
            headerRight: () => (
              <AddTripToListButton myTrip={myTrip} notMyTrip={notMyTrip} />
            ),
            headerTintColor: "white",
            headerBackTitleVisible: false,
          };
        }}
      />
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
    </Stack.Navigator>
  );
};

export default observer(RootNavigator);

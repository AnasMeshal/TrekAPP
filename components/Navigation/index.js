import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

//components
import Home from "../Home";
import TripList from "../TripList";
import AddTrip from "../AddTrip";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Profile from "../Profile";

//Buttons
import TripDetail from "../TripDetail";
import GoBackButton from "../buttons/GoBackButton";
import TempButton from "../buttons/TempButton";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Trips"
        component={TripList}
        options={{
          headerStyle: {
            backgroundColor: "#42d4f2",
          },
          title: "Choose a Trip",
          headerTitleStyle: {
            color: "white",
          },
          headerLeft: () => <GoBackButton />,
          headerRight: () => <TempButton />,
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",

          headerStyle: {
            backgroundColor: "#42d4f2",
          },
          headerTitleStyle: {
            color: "white",
          },
          headerLeft: () => <GoBackButton />,
        }}
      />
      <Screen
        name="Trip Detail"
        component={TripDetail}
        options={({ route }) => {
          console.log("RootNavigator -> route", route);
          const { notMyTrip } = route.params;
          const { myTrip } = route.params;

          return {
            title: myTrip ? myTrip.title : notMyTrip.title,
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
        name="AddTrip"
        component={AddTrip}
        options={{
          title: "Add a Trip",

          headerStyle: {
            backgroundColor: "#42d4f2",
          },
          headerTitleStyle: {
            color: "white",
          },
          headerLeft: () => <GoBackButton />,
        }}
      />

      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />

      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default observer(RootNavigator);

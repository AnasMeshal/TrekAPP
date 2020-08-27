import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

//components
import Home from "../Home";
import TripList from "../TripList";
import AddTrip from "../AddTrip";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

//Buttons
import AddTripButton from "../buttons/AddTripButton";
import TripDetail from "../TripDetail";
import GoBackButton from "../buttons/GoBackButton";

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
        }}
      />
      <Screen
        name="Trip Detail"
        component={TripDetail}
        options={({ route }) => {
          const { trip } = route.params;
          return {
            title: trip.title,
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

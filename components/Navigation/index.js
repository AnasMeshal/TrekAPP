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

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Trips"
        component={TripList}
        options={{
          title: "Choose a Trip",
          headerRight: () => <AddTripButton />,
        }}
      />
      <Screen
        name="Trip Detail"
        component={TripDetail}
        options={({ route }) => {
          const { trip } = route.params;
          return {
            title: trip.title,
          };
        }}
      />
      <Screen
        name="AddTrip"
        component={AddTrip}
        options={{
          title: "Add a Trip",
        }}
      />

      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false, title: "Account" }}
      />

      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false, title: "Account" }}
      />
    </Navigator>
  );
};

export default observer(RootNavigator);

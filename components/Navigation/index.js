import React from "react";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { observer } from "mobx-react";

//components
import Home from "../Home";
import TripList from "../TripList";
import AddTrip from "../AddTrip";
import TripDetail from "../TripDetail";
import TripTitle from "../TripDetail/TripTitle";

//Buttons
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
        options={{
          headerStyle: {
            backgroundColor: "#42d4f2",
          },
          headerTitle: () => <TripTitle />,
          headerLeft: () => <GoBackButton />,
        }}
      />
      <Screen
        name="AddTrip"
        component={AddTrip}
        options={{
          headerStyle: {
            backgroundColor: "#42d4f2",
          },
          title: "Add a Trip",
          headerTitleStyle: {
            color: "white",
          },
          headerLeft: () => <GoBackButton />,
        }}
      />
    </Navigator>
  );
};

export default observer(RootNavigator);

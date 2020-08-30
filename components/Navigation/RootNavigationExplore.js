import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

//components
import TripList from "../TripList";
import AddTrip from "../AddTrip";
import OtherProfile from "../OtherProfile";

//Buttons
import TripDetail from "../TripDetail";
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
          title: "Choose a Trip",
          headerLeft: () => null,
        }}
      />
      <Screen
        name="OtherProfile"
        component={OtherProfile}
        options={({ route }) => {
          const { defIsNotMyProfile } = route.params;
          return {
            title: defIsNotMyProfile.id,
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
          const { myTrip } = route.params;
          return {
            title: myTrip ? myTrip.title : notMyTrip.title,
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

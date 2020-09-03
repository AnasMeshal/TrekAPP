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
import OtherProfile from "../OtherProfile";

//Buttons
import TripDetail from "../TripDetail";
import GoBackButton from "../buttons/GoBackButton";
import TempButton from "../buttons/TempButton";
import LogOutButton from "../buttons/LogOutButton";
import maps from "../geolocation/maps";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  // const user = authStore.user;
  // console.log("RootNavigator -> user", user);

  return (
    <Navigator
      // initialRouteName={user !== undefined ? "Signin" : "Home"}
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#42d4f2",
        },
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Trips"
        component={TripList}
        options={{
          title: "Choose a Trip",
          headerLeft: () => null,
          headerRight: () => <TempButton />,
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerLeft: () => <GoBackButton />,
          headerRight: () => <LogOutButton />,
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
      <Screen name="map" component={maps} options={{ headerShown: false }} />
    </Navigator>
  );
};

export default observer(RootNavigator);

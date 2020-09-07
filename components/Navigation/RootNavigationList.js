import React from "react";
import { observer } from "mobx-react";

// Components
import Lists from "../Lists";
import ListDetail from "../ListDetail";
import TripDetail from "../TripDetail";
import AddList from "../AddList";

// Buttons
import OpenDrawer from "../buttons/OpenDrawer";
import GoBackButton from "../buttons/GoBackButton";
import AddListButton from "../buttons/AddListButton";
import AddTripToListButton from "../buttons/AddTripToListButton";

// Amazing Stack Navigator
import { createNativeStackNavigator } from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

const RootNavigationList = () => {
  return (
    <Stack.Navigator
      initialRouteName="Lists"
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
        name="Lists"
        component={Lists}
        options={{
          headerLargeTitle: true,
          title: "Lists",
          headerLeft: () => <AddListButton />,
          headerRight: () => <OpenDrawer />,
        }}
      />

      <Stack.Screen
        name="List Detail"
        component={ListDetail}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
        }}
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
        name="Add List"
        component={AddList}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default observer(RootNavigationList);

import React from "react";
import { observer } from "mobx-react";

// Components
import Modal from "../Modal";
import FirstTimeVisiting from "../FirstTimeVisiting";
import Maps from "../geolocation/maps";

// Navigation
import BottomTab from "./BottomTab";

// Stores
import authStore from "../../stores/authStore";

// Amazing Navigator
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import AllMarkers from "../geolocation/AllMarkers";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      mode="modal"
      initialRouteName={
        authStore.user === null ? "FirstTimeVisiting" : "BottomTab"
      }
    >
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ animationTypeForReplace: "pop", headerShown: false }}
      />
      <Stack.Screen
        name="Modal"
        component={Modal}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="map"
        component={Maps}
        options={({ route }) => {
          return {
            headerShown: false,
            animationTypeForReplace: "pop",
            headerShown: false,
          };
        }}
      />
      <Stack.Screen
        name="AllMarkers"
        component={AllMarkers}
        options={({ route }) => {
          return {
            headerShown: false,
            animationTypeForReplace: "pop",
            headerShown: false,
          };
        }}
      />
      {authStore.user === null && (
        <Stack.Screen
          name="FirstTimeVisiting"
          component={FirstTimeVisiting}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default observer(Main);

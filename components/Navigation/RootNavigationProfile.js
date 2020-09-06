import React from "react";
import { observer } from "mobx-react";

// Components
import AddTrip from "../AddTrip";
import Profile from "../Profile";
import TripDetail from "../TripDetail";
import Favorites from "../Profile/Favorites";
import Maps from "../geolocation/maps";

// Buttons
import GoBackButton from "../buttons/GoBackButton";
import LogOutButton from "../buttons/LogOutButton";
import { Button, Toast, Icon, Root } from "native-base";
import tripStore from "../../stores/tripStore";
import OpenDrawer from "../buttons/OpenDrawer";
import AddTripToListButton from "../buttons/AddTripToListButton";

import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { useNavigation } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

const RootNavigatorProfile = () => {
  navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Profile"
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
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerRight: () => <OpenDrawer />,
          headerLeft: () => <LogOutButton />,
        }}
      />

      <Stack.Screen
        name="AddTrip"
        component={AddTrip}
        options={{
          title: "Add a Trip",
          headerTintColor: "white",
          headerBackTitleVisible: false,
          // headerLeft: (navigation) => <GoBackButton navigation={navigation} />,
        }}
      />

      <Stack.Screen
        name="Trip Detail"
        component={TripDetail}
        options={({ route }) => {
          const { myTrip } = route.params;
          return {
            title: myTrip.title,
            headerTintColor: "white",
            headerBackTitleVisible: false,
            // headerLeft: () => <GoBackButton navigation={navigation} />,
            // TODO  ADAPTIVE FAVORITE BUTTON
            headerRight: () =>
              myTrip.isFavorite === "T" ? (
                <Button
                  transparent
                  onPress={async () => {
                    await tripStore.tripUpdate({
                      ...myTrip,
                      isFavorite: "F",
                    });
                    Toast.show({
                      text: `Removed ${myTrip.title} from Favorites`,
                      type: "danger",
                      position: "bottom",
                    });
                  }}
                >
                  <Icon
                    type="Ionicons"
                    name="ios-heart"
                    style={{ color: "red", fontSize: 30, marginRight: 20 }}
                  />
                </Button>
              ) : (
                <Button
                  transparent
                  onPress={async () => {
                    await tripStore.tripUpdate({
                      ...myTrip,
                      isFavorite: "T",
                    });
                    Toast.show({
                      text: `Added ${myTrip.title} to Favorites`,
                      type: "danger",
                    });
                  }}
                >
                  <Icon
                    type="Ionicons"
                    name="ios-heart-empty"
                    style={{ color: "white", fontSize: 30, marginRight: 20 }}
                  />
                </Button>
              ),
          };
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerLargeTitle: true,
          title: "Your Favorites",
          headerTintColor: "white",
          headerBackTitleVisible: false,
          // headerLeft: () => <GoBackButton navigation={navigation} />,
        }}
      />
  <Stack.Screen
        name="map"
        component={Maps}
        options={({ route }) => {
          const { myTrip } = route.params;
          return {
            headerShown: false,
          };
        }}
      />
    
    </Stack.Navigator>
  );
};

export default observer(RootNavigatorProfile);

// {
//   myTrip.isFavorite === "T" ? (
//     <Button
//       transparent
//       onPress={async () => {
//         await tripStore.tripUpdate({
//           ...trip,
//           isFavorite: "F",
//         });
//         Toast.show({
//           text: `Removed ${trip.title} from Favorites`,
//           type: "danger",
//           position: "bottom",
//         });
//       }}
//     >
//       <Icon
//         type="Ionicons"
//         name="ios-heart"
//         style={{ color: "red", fontSize: 40 }}
//       />
//     </Button>
//   ) : (
//     <Button
//       transparent
//       onPress={async () => {
//         await tripStore.tripUpdate({
//           ...trip,
//           isFavorite: "T",
//         });
//         Toast.show({
//           text: `Added ${trip.title} to Favorites`,
//           type: "danger",
//           position: "bottom",
//         });
//       }}
//     >
//       <Icon
//         type="Ionicons"
//         name="ios-heart-empty"
//         // TODO ASK ABOUT ICON ANIMATIONS?
//         style={{ color: "black", fontSize: 40 }}
//       />
//     </Button>
//   );
// },

import React from "react";
import { observer } from "mobx-react";

// Components
import AddTrip from "../AddTrip";
import Profile from "../Profile";
import TripDetail from "../TripDetail";
import Favorites from "../Profile/Favorites";
import Maps from "../geolocation/maps";
import AllMarkers from "../geolocation/AllMarkers";

// Buttons
import GoBackButton from "../buttons/GoBackButton";
import LogOutButton from "../buttons/LogOutButton";
import { Button, Toast, Icon, Root, Row } from "native-base";
import tripStore from "../../stores/tripStore";
import OpenDrawer from "../buttons/OpenDrawer";
import authStore from "../../stores/authStore";

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
          headerLeft: () => <LogOutButton />,
          headerRight: () => <OpenDrawer />,
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
                <>
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
                  <AddTripToListButton myTrip={myTrip} />
                </>
              ) : (
                <>
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
                  <AddTripToListButton myTrip={myTrip} />
                </>
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
          return {
            headerShown: false,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default observer(RootNavigatorProfile);

import React from "react";
import { observer } from "mobx-react";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import AddTrip from "../AddTrip";
import Profile from "../Profile";
import TripDetail from "../TripDetail";
import Favorites from "../Profile/Favorites";

// Buttons
import LogOutButton from "../buttons/LogOutButton";
import { Button, Toast, Icon, Row } from "native-base";
import OpenDrawer from "../buttons/OpenDrawer";

// Stores
import tripStore from "../../stores/tripStore";
import AddTripToListButton from "../buttons/AddTripToListButton";
import authStore from "../../stores/authStore";

const Stack = createStackNavigator();

const RootNavigatorProfile = () => {
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

          headerLeft: () => (
            <Row>
              <LogOutButton />
              <OpenDrawer />
            </Row>
          ),
        }}
      />

      <Stack.Screen
        name="AddTrip"
        component={AddTrip}
        options={{
          title: "Add a Trip",
          headerTintColor: "white",
          headerBackTitleVisible: false,
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

            // TODO  ADAPTIVE FAVORITE BUTTON
            headerRight: () =>
              myTrip.isFavorite === "T" ? (
                <Row>
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
                        textStyle: {
                          fontWeight: "bold",
                          textAlign: "center",
                          fontSize: 20,
                        },
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
                </Row>
              ) : (
                <Row>
                  <Button
                    transparent
                    onPress={async () => {
                      await tripStore.tripUpdate({
                        ...myTrip,
                        isFavorite: "T",
                      });
                      Toast.show({
                        text: `Added ${myTrip.title} to Favorites`,
                        textStyle: {
                          fontWeight: "bold",
                          textAlign: "center",
                          fontSize: 20,
                        },
                        style: { backgroundColor: "#42d4f2e6" },
                        position: "bottom",
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
                </Row>
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
        }}
      />
    </Stack.Navigator>
  );
};

export default observer(RootNavigatorProfile);

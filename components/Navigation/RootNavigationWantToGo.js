import React from "react";
import { observer } from "mobx-react";

// Components
import TripDetail from "../TripDetail";
import WantToGoList from "../WantToGoList";

// Buttons
import OpenDrawer from "../buttons/OpenDrawer";
import GoBackButton from "../buttons/GoBackButton";

// Amazing Stack Navigator
import { createNativeStackNavigator } from "react-native-screens/native-stack";

//TODO DESTRUCTURE
const Stack = createNativeStackNavigator();

const RootNavigationWantToGo = () => {
  return (
    <Stack.Navigator
      initialRouteName="WantToGo"
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
        name="WantToGo"
        component={WantToGoList}
        options={{
          headerLargeTitle: true,
          title: "Want To Go",
          headerRight: () => <OpenDrawer />,
        }}
      />
      <Stack.Screen
        name="Trip Detail"
        component={TripDetail}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default observer(RootNavigationWantToGo);

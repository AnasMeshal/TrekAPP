import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

// Components
import TripDetail from "../TripDetail";
import WantToGoList from "../WantToGoList";

// Buttons
import OpenDrawer from "../buttons/OpenDrawer";
import GoBackButton from "../buttons/GoBackButton";

const { Navigator, Screen } = createStackNavigator();

const RootNavigationWantToGo = () => {
  return (
    <Navigator
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
      <Screen
        name="WantToGo"
        component={WantToGoList}
        options={{
          title: "Want To Go",
          headerRight: () => <OpenDrawer />,
        }}
      />
      <Screen
        name="Trip Detail"
        component={TripDetail}
        options={{
          headerLeft: () => <GoBackButton />,
        }}
      />
    </Navigator>
  );
};

export default observer(RootNavigationWantToGo);

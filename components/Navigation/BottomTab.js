import React from "react";
import { observer } from "mobx-react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Navigation
import RootNavigationProfile from "./RootNavigationProfile";
import RootNavigationExplore from "./RootNavigationExplore";

//Styles
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      initialRouteName="Explore"
    >
      <Screen
        name="Explore"
        component={RootNavigationExplore}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={40} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={RootNavigationProfile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={40} />
          ),
        }}
      />
    </Navigator>
  );
};

export default observer(BottomTab);

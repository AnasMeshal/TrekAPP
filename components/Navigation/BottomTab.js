import React from "react";
import { observer } from "mobx-react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Navigation
import RootNavigationProfile from "./RootNavigationProfile";
import RootNavigationExplore from "./RootNavigationExplore";

//Styles
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import RootNavigationSearch from "./RootNavigationSearch";
import DrawerNavigation from "./DrawerNavigation";

// const { Navigator, Screen } = createBottomTabNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      initialRouteName="Explore"
    >
      <Tab.Screen
        name="Explore"
        component={RootNavigationExplore}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="earth"
              color={color}
              size={40}
              style={{ marginTop: "7%" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={RootNavigationSearch}
        options={{
          //TODO ONCLICK OPEN KEYBOARD TO SEARCH
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="magnify"
              color={color}
              size={40}
              style={{ marginTop: "7%" }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={40}
              style={{ marginTop: "7%" }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default observer(BottomTab);

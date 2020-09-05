import React from "react";
import { observer } from "mobx-react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Component

import RootNavigationList from "./RootNavigationList";
import RootNavigationProfile from "./RootNavigationProfile";

const { Navigator, Screen } = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Navigator
      drawerPosition="left"
      drawerType="front"
      initialRouteName="Profile"
    >
      <Screen name="Profile" component={RootNavigationProfile} />
      <Screen name="Lists" component={RootNavigationList} />
    </Navigator>
  );
};

export default observer(DrawerNavigation);

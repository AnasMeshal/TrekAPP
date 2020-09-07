import React from "react";
import { observer } from "mobx-react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Component
import RootNavigationList from "./RootNavigationList";
import RootNavigationProfile from "./RootNavigationProfile";
import RootNavigationWantToGo from "./RootNavigationWantToGo";

// Buttons
import LogOutButton from "../buttons/LogOutButton";

// Stores
import authStore from "../../stores/authStore";

const { Navigator, Screen } = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Navigator
      drawerPosition="left"
      drawerType="front"
      initialRouteName="Profile"
      keyboardDismissMode="on-drag"
    >
      <Screen name="Profile" component={RootNavigationProfile} />
      {authStore.user && (
        <>
          <Screen name="Want to go" component={RootNavigationWantToGo} />
          <Screen name="Lists" component={RootNavigationList} />
        </>
      )}
    </Navigator>
  );
};

export default observer(DrawerNavigation);

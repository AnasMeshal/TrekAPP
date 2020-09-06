import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// ThemeProvider
// TODO ADD THEME
import { ThemeProvider } from "styled-components";

//Components
import Main from "./components/Navigation/Main";
import { enableScreens } from "react-native-screens";
import { Root } from "native-base";

export default function App() {
  enableScreens();
  return (
    <Root>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Root>
  );
}

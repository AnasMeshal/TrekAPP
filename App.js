import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// ThemeProvider
// TODO ADD THEME
import { ThemeProvider } from "styled-components";

//Components
import Main from "./components/Navigation/Main";

import { Root } from "native-base";

export default function App() {
  return (
    <Root>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Root>
  );
}

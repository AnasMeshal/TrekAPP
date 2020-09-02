import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// ThemeProvider
// TODO ADD THEME
import { ThemeProvider } from "styled-components";

//Components
import Main from "./components/Navigation/Main";

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}

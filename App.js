import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//ThemeProvider
import { ThemeProvider } from "styled-components";
// REVIEW: Clean up your imports

//Components
import RootNavigator from "./components/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

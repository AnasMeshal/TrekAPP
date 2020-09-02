import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//ThemeProvider
// not being used, either remove it or use it.
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

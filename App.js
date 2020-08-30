import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//ThemeProvider
import { ThemeProvider } from "styled-components";

//Components
import BottomTab from "./components/Navigation/BottomTab";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}

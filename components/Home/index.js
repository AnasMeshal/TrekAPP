import React from "react";

//Styles
import { CenterButton } from "./styles";
import { Button, Text } from "native-base";

const Home = ({ navigation }) => {
  return (
    <CenterButton>
      <Button
        style={{ padding: "10%", alignSelf: "center" }}
        onPress={() => navigation.navigate("Trips")}
        light
      >
        <Text>Click Here to Skip</Text>
      </Button>
      <Text>Home</Text>
    </CenterButton>
  );
};

export default Home;

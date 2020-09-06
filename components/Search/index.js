import React from "react";
import { View, Text } from "react-native";
import {
  Title,
  Container,
  Item,
  Icon,
  Input,
  Button,
  Header,
} from "native-base";
import TripList from "../TripList";

const Search = () => {
  return (
    // <ScrollView>
    <Container>
      <Header
        searchBar
        rounded
        style={{
          backgroundColor: "#42d4f2",
          color: "white",
        }}
      >
        <Item
          style={{
            backgroundColor: "#ffffffF2",
          }}
        >
          <Icon
            name="ios-search"
            style={{
              color: "#42d4f2",
            }}
          />
          <Input placeholder="Search" />
        </Item>
      </Header>
      <TripList searchList />
    </Container>
    // </ScrollView>
  );
};

export default Search;

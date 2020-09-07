import React, { useState } from "react";
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
import tripStore from "../../stores/tripStore";
import TripItem from "../TripList/TripItem";
import authStore from "../../stores/authStore";

const Search = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredList = authStore.user
    ? tripStore.trips
        .filter((trip) => trip.userId !== authStore.user.id)
        .filter((trip) =>
          // trip.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          trip.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
    : tripStore.trips.filter((trip) =>
        // trip.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

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
          <Input
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </Item>
      </Header>
      <TripList navigation={navigation} filteredList={filteredList} />
    </Container>
    // </ScrollView>
  );
};

export default Search;

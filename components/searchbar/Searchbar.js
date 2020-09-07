import React, { useState } from "react";
import { View, Text, Content } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";

//Stores
import tripStore from "../../stores/tripStore";

import TripItem from "../TripList/TripItem";

const Searchbar = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    console.log(query);
  };

  const filteredList = tripStore.trips
    .filter(
      (trip) =>
        trip.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .map((trip) => (
      <TripItem trip={trip} navigation={navigation} key={trip.id} />
    ));

  return (
    <Content>
      <SafeAreaView>
        <TextInput
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        {filteredList}
      </SafeAreaView>
    </Content>
  );
};

export default Searchbar;

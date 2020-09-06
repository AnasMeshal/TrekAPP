import React, { useState } from "react";
import { observer } from "mobx-react";

// Styles
import { List, Content, View, Row } from "native-base";

// Components
import TripItem from "./TripItem";

// Stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import { ScrollView } from "react-native-gesture-handler";
import FilterButton from "../buttons/FilterButton";
import SortButton from "../buttons/SortButton";

const TripList = ({ navigation, otherProfileTrips, searchList }) => {
  const [filter, setFilter] = useState("Remove Filters");

  const [sort, setSort] = useState("Sort Trips");
  // the .map() is repeated
  // remove the condition here
  // add an if-statement below
  // if authStore.user then apply .filter()
  // TODO ?
  // const exploreTrips = tripStore.trips.if (authStore.user) {filter((trip) => trip.userId !== authStore.user.id)}.map((trip) => (
  //   <TripItem trip={trip} navigation={navigation} key={trip.id} />
  // ))

  const filteredTrips =
    filter === "Favorites"
      ? authStore.user
        ? tripStore.trips
            .filter((trip) => trip.userId !== authStore.user.id)
            .filter((trip) => trip.isFavorite === "T")
            .map((trip) => (
              <TripItem trip={trip} navigation={navigation} key={trip.id} />
            ))
        : tripStore.trips
            .filter((trip) => trip.isFavorite === "T")
            .map((trip) => (
              <TripItem trip={trip} navigation={navigation} key={trip.id} />
            ))
      : filter === "Remove Filters"
      ? authStore.user
        ? tripStore.trips
            .filter((trip) => trip.userId !== authStore.user.id)
            .map((trip) => (
              <TripItem trip={trip} navigation={navigation} key={trip.id} />
            ))
        : tripStore.trips.map((trip) => (
            <TripItem trip={trip} navigation={navigation} key={trip.id} />
          ))
      : authStore.user
      ? tripStore.trips
          .filter((trip) => trip.userId !== authStore.user.id)
          .map((trip) => (
            <TripItem trip={trip} navigation={navigation} key={trip.id} />
          ))
      : tripStore.trips.map((trip) => (
          <TripItem trip={trip} navigation={navigation} key={trip.id} />
        ));

  const exploreTrips =
    // sort === "Favorites"
    //   ? filteredTrips
    //       .filter((trip) => trip.isFavorite === "T")
    //       //TODO.concat(filteredTrips.filter((trip) => trip.isFavorite !== "T"))
    //       .map((trip) => (
    //         <TripItem trip={trip} navigation={navigation} key={trip.id} />
    //       ))
    // : sort === "Alphabetical Order"
    // ? filteredTrips
    //     //TODO.sort((a, b) =>
    //     //   a.title.localeCompare(b.title)
    //     // ) /*//TODO ALPHABETICAL EXCLUDE MARKDOWN SYMBOLS*/
    //     .map((trip) => (
    //       <TripItem trip={trip} navigation={navigation} key={trip.id} />
    //     )) :
    filteredTrips;

  return (
    <ScrollView>
      {!otherProfileTrips && searchList && (
        <Row>
          <SortButton sort={sort} setSort={setSort} />
          <FilterButton filter={filter} setFilter={setFilter} />
        </Row>
      )}
      <Content>
        <View>
          {/* TODO how to optimize this? */}
          {/* TODO SORT PICKER */}
          <List>{otherProfileTrips ? otherProfileTrips : exploreTrips}</List>
        </View>
      </Content>
    </ScrollView>
  );
};

export default observer(TripList);

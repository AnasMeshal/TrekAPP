import React from "react";
import { ScrollView } from "react-native";
import { observer } from "mobx-react";
import { List, Root } from "native-base";
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import TripItem from "../TripList/TripItem";
import { FavoritesText, NoFavoritesText, NoFavoritesMsg } from "./styles";

const Favorites = ({ navigation }) => {
  const favoriteTrips = tripStore.trips
    .filter((trip) => trip.userId === authStore.user.id)
    .filter((_trip) => _trip.isFavorite === "T")
    .map((trip) => (
      <TripItem isProfile trip={trip} navigation={navigation} key={trip.id} />
    ));
  return favoriteTrips.length > 0 ? (
    <ScrollView>
      {/* <FavoritesText>Favorites</FavoritesText> */}
      <List>{favoriteTrips}</List>
    </ScrollView>
  ) : (
    <ScrollView>
      <NoFavoritesText>You Have No Favorites</NoFavoritesText>
      <NoFavoritesMsg>
        Please mark some of your trips as favorites using the heart button on
        the right.
      </NoFavoritesMsg>
    </ScrollView>
  );
};

export default observer(Favorites);
/*import React from "react";
import { observer } from "mobx-react";

// Styles
import { List, View } from "native-base";

// Stores
import tripStore from "../../stores/tripStore";
import TripItem from "../TripList/TripItem";
import authStore from "../../stores/authStore";

const MyTripList = ({ navigation }) => {
  if (!authStore.user) return null;
  // TODO RETURN NICE MESSAGE
  // (Tell mshary ali told us to do)
  const profileTrips = tripStore.trips
    .filter((trip) => trip.userId === authStore.user.id)
    .map((trip) => (
      <TripItem isProfile trip={trip} navigation={navigation} key={trip.id} />
    ));

  return (
    <View>
      <List>{profileTrips}</List>
    </View>
  );
};

export default observer(MyTripList);
*/

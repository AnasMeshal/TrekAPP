import React, { useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { Button, Text, View, Title } from "native-base";
import Navigation from "../Navigation";

import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";

const maps = ({ navigation }) => {
  const [state, setState] = useState("");

  const tripMarker = authStore.user
    ? tripStore.trips
        .filter((trip) => trip.userId === authStore.user.id)
        .map((trip) => (
          <Marker
            coordinate={{ latitude: trip.latitude, longitude: trip.longitude }}
            title={trip.title}
            description={trip.description}
          />
        ))
    : console.log("maps -> tripMarker", tripMarker);

  return (
    <>
      <MapView
        provider={MapView.PROVIDER_GOOGLE} // for google maps
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {tripMarker}
      </MapView>

      <Button onPress={() => navigation.goBack()}>
        <Text>Back to profile</Text>
      </Button>
    </>
  );
};

export default maps;

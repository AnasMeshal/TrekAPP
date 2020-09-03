import React from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { Button, Text } from "native-base";

const Maps = ({ navigation, route }) => {
  const { myTrip } = route.params;

  return (
    <>
      <MapView
        provider={MapView.PROVIDER_GOOGLE} // for google maps
        style={{ flex: 1 }}
        initialRegion={{
          latitude: myTrip.latitude,
          longitude: myTrip.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: myTrip.latitude,
            longitude: myTrip.longitude,
          }}
          title={myTrip.title}
          description={myTrip.description}
        />
      </MapView>
      <Button onPress={() => navigation.goBack()}>
        <Text>Back to profile</Text>
      </Button>
    </>
  );
};

export default Maps;

import React from "react";

// Components
import MapView, { Marker } from "react-native-maps";

//Styles
import { Text } from "native-base";
import { MapButton } from "./styles";

// Stores
import tripStore from "../../stores/tripStore";

// Buttons
import GoBackButton from "../buttons/GoBackButton";

const AllMarkers = ({ navigation, route }) => {
  const { notMyProfile } = route.params;

  const firstTrip = tripStore.trips.filter(
    (trip) => trip.userId === notMyProfile.userId
  )[0];

  const otherProfileTripMarkers = tripStore.trips
    .filter((trip) => trip.userId === notMyProfile.userId)
    .map((trip) => (
      <Marker
        coordinate={{
          latitude: trip.latitude,
          longitude: trip.longitude,
        }}
        title={trip.title}
        description={trip.description}
      />
    ));

  const mapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#263c3f",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6b9a76",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#38414e",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#212a37",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9ca5b3",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#1f2835",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#f3d19c",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#2f3948",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#515c6d",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
  ];

  return (
    <>
      <MapView
        customMapStyle={mapStyle}
        provider={MapView.PROVIDER_GOOGLE} // for google maps
        style={{ flex: 1 }}
        initialRegion={{
          latitude: firstTrip.latitude,
          longitude: firstTrip.longitude,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
      >
        {otherProfileTripMarkers}
        <GoBackButton />
      </MapView>
    </>
  );
};

export default AllMarkers;

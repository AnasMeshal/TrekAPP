import React from "react";
import Swipeout from "react-native-swipeout";

//Styles
import {
  ListItem,
  Text,
  Left,
  Thumbnail,
  Body,
  Right,
  Button,
} from "native-base";
import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";

const TripItem = ({ trip, navigation, isProfile }) => {
  const newTrip = {
    title: trip.title,
    image: trip.image,
    details: trip.details,
  };

  const swipeoutBtns = [
    {
      text: "Duplicate",
      backgroundColor: "blue",
      underlayColor: "rgba(0, 0, 0, 1, 0.6)",
      onPress: async () => {
        await tripStore.tripCreate(newTrip);
      },
    },
    {
      text: "Delete",
      backgroundColor: "red",
      underlayColor: "rgba(0, 0, 0, 1, 0.6)",
      onPress: async () => {
        await tripStore.tripDelete(trip.id);
      },
    },
  ];

  //TODO: better swipe button width and do it in one return
  if (isProfile) {
    return (
      <Swipeout
        backgroundColor="transparent"
        right={swipeoutBtns}
        buttonWidth={100}
      >
        <ListItem thumbnail>
          <Left>
            <Thumbnail
              square
              source={{
                uri: trip.image
                  ? trip.image
                  : "https://static.toiimg.com/photo/msid-66440799,width-96,height-65.cms",
              }}
            />
          </Left>
          <Body>
            <Text>{trip.title}</Text>
            <Text note numberOfLines={1}>
              {trip.details}
            </Text>
          </Body>
          <Right>
            <Button
              onPress={() =>
                navigation.navigate("Trip Detail", { myTrip: trip })
              }
              transparent
            >
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
      </Swipeout>
    );
  }

  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail
          square
          source={{
            uri: trip.image
              ? trip.image
              : "https://static.toiimg.com/photo/msid-66440799,width-96,height-65.cms",
          }}
        />
      </Left>
      <Body>
        <Text>{trip.title}</Text>
        <Text note numberOfLines={1}>
          {trip.details}
        </Text>
      </Body>
      <Right>
        <Button
          onPress={() =>
            navigation.navigate("Trip Detail", { notMyTrip: trip })
          }
          transparent
        >
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default observer(TripItem);

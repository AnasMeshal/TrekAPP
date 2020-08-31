//TODO TOUCHABLE OPACITY OR HIGHLIGHT TO PRESS THE WHOLE LIST ITME
//TODO STYLING LIBRARY MATERIAL UI
import React from "react";
import Swipeout from "react-native-swipeout";
//TODO: SWITCH TO THIS https://github.com/jemise111/react-native-swipe-list-view
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
import profileStore from "../../stores/profileStore";
import Navigation from "../Navigation";

/**
 * I didn't review this component very closely
 * cuz i don't know how the swipe library youre using works exactly
 */

const TripItem = ({ trip, navigation, isProfile }) => {
  const newTrip = {
    title: trip.title,
    image: trip.image,
    details: trip.details,
  };

  const notMyUserId = { userId: trip.userId };

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

  // i have no idea what this is
  // how is there a comma and it doesnt crash?
  // a less meaningful name could not have been found.
  const view = () => {
    profileStore.findNotMyProfile(notMyUserId),
      navigation.push("Trip Detail", { notMyTrip: trip });
  };

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
                uri: trip.image || "https://static.toiimg.com/photo/msid-66440799,width-96,height-65.cms",
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
              onPress={() => {
                navigation.navigate("Trip Detail", { myTrip: trip });
              }}
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
            uri: trip.image || "https://static.toiimg.com/photo/msid-66440799,width-96,height-65.cms",
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
        <Button onPress={view} transparent>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default observer(TripItem);

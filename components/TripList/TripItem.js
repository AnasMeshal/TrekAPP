//TODO TOUCHABLE OPACITY OR HIGHLIGHT TO PRESS THE WHOLE LIST ITME
//TODO STYLING LIBRARY MATERIAL UI
import React from "react";
import Swipeout from "react-native-swipeout";
//TODO: SWITCH TO THIS https://github.com/jemise111/react-native-swipe-list-view
// Styles
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
import Markdown from "react-native-simple-markdown";

const TripItem = ({ trip, navigation, isProfile }) => {
  const newTrip = {
    title: trip.title,
    image: trip.image,
    details: trip.details,
  };

  const notMyUserId = trip.userId;
  let notMyProfile = [];

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

  const viewTrip = async () => {
    notMyProfile = await profileStore.fetchProfile(notMyUserId);
    navigation.push("Trip Detail", {
      notMyProfile: notMyProfile,
      notMyTrip: trip,
    });
  };

  const tripPreview =
    trip.details.replace(/[^A-Za-z0-9.-:/$ ]/g, "").slice(0, 30) + "...";

  //TODO: better swipe button width and do it in one return
  if (isProfile) {
    return (
      <Swipeout
        backgroundColor="transparent"
        right={swipeoutBtns}
        buttonWidth={100}
      >
        <ListItem
          onPress={() => {
            navigation.navigate("Trip Detail", { myTrip: trip });
          }}
          thumbnail
        >
          <Left>
            <Thumbnail
              square
              source={{
                uri:
                  trip.image ||
                  "https://static.toiimg.com/photo/msid-66440799,width-96,height-65.cms",
              }}
            />
          </Left>
          <Body>
            <Markdown
              styles={{
                text: { fontSize: "16" },
              }}
              whitelist={["strong", "em"]}
            >
              {trip.title}
            </Markdown>
            <Markdown
              whitelist={["strong", "em"]}
              numberOfLines={1}
              styles={{
                text: {
                  fontWeight: "200",
                  color: "grey",
                  marginTop: 7,
                },
              }}
            >
              {tripPreview}
            </Markdown>
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
    <ListItem onPress={viewTrip} thumbnail>
      <Left>
        <Thumbnail
          square
          source={{
            uri:
              trip.image ||
              "https://static.toiimg.com/photo/msid-66440799,width-96,height-65.cms",
          }}
        />
      </Left>
      <Body>
        <Markdown
          styles={{
            text: { fontSize: "16" },
          }}
          whitelist={["strong", "em"]}
        >
          {trip.title}
        </Markdown>
        <Markdown
          whitelist={["strong", "em"]}
          numberOfLines={1}
          styles={{
            text: {
              fontWeight: "200",
              color: "grey",
              marginTop: 7,
            },
          }}
        >
          {tripPreview}
        </Markdown>
      </Body>
      <Right>
        <Button onPress={viewTrip} transparent>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default observer(TripItem);

import React from "react";
import { observer } from "mobx-react";

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
import Swipeout from "react-native-swipeout";
import Markdown from "react-native-simple-markdown";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";

const ListTrip = ({ trip, navigation }) => {
  const swipeoutBtns = [
    {
      text: "Delete",
      backgroundColor: "red",
      underlayColor: "rgba(0, 0, 0, 1, 0.6)",
      //   onPress: async () => {
      //     await tripStore.tripDelete(trip.id);
      //   },
    },
  ];

  const notMyUserId = trip.userId;
  let notMyProfile = [];

  const viewTrip = async () => {
    notMyProfile = await profileStore.fetchProfile(notMyUserId);
    navigation.push("Trip Detail", {
      notMyProfile: notMyProfile,
      notMyTrip: trip,
    });
  };

  const tripPreview =
    trip.details.replace(/[^A-Za-z0-9.-:/$ ]/g, "").slice(0, 30) + "...";

  if (trip.userId === authStore.user.id) {
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
    <Swipeout
      backgroundColor="transparent"
      right={swipeoutBtns}
      buttonWidth={100}
    >
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
    </Swipeout>
  );
};

export default observer(ListTrip);

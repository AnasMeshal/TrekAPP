//TODO STYLING LIBRARY MATERIAL UI
import React from "react";
import Swipeout from "react-native-swipeout";
//TODO: SWITCH TO THIS https://github.com/jemise111/react-native-swipe-list-view
// TODO CHANGE VIEW BUTTON TO CITY OF TRIP/LOCATION?
// Styles
import {
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Toast,
  Row,
  Card,
  CardItem,
  Thumbnail,
} from "native-base";

import { Image } from "react-native";
import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";
import profileStore from "../../stores/profileStore";
import Markdown from "react-native-simple-markdown";
import { ImagePreview } from "./styles";
import { TripImage } from "../TripDetail/styles";
import { TouchableOpacity } from "react-native-gesture-handler";

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
        await tripStore.tripCreate({ ...newTrip, isFavorite: trip.isFavorite }),
          Toast.show({
            text: `Duplicated ${trip.title}`,
            type: "success",
            position: "bottom",
          });
      },
    },
    {
      text: "Delete",
      backgroundColor: "red",
      underlayColor: "rgba(0, 0, 0, 1, 0.6)",
      onPress: async () => {
        await tripStore.tripDelete(trip.id);
        Toast.show({
          text: `Deleted ${trip.title}`,
          type: "danger",
          position: "bottom",
        });
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
            <ImagePreview
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
                text: { fontSize: 16 },
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
            <Row>
              <Button
                onPress={() => {
                  navigation.navigate("Trip Detail", { myTrip: trip });
                }}
                transparent
              >
                <Text>View</Text>
              </Button>
              {trip.isFavorite === "T" ? (
                <Button
                  transparent
                  onPress={async () => {
                    await tripStore.tripUpdate({
                      ...trip,
                      isFavorite: "F",
                    });
                    Toast.show({
                      text: `Removed ${trip.title} from Favorites`,
                      type: "danger",
                      position: "bottom",
                    });
                  }}
                >
                  <Icon
                    type="Ionicons"
                    name="ios-heart"
                    style={{ color: "red", fontSize: 40 }}
                  />
                </Button>
              ) : (
                <Button
                  transparent
                  onPress={async () => {
                    await tripStore.tripUpdate({
                      ...trip,
                      isFavorite: "T",
                    });
                    Toast.show({
                      text: `Added ${trip.title} to Favorites`,
                      textStyle: {
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 20,
                      },
                      style: { backgroundColor: "#42d4f2e6" },
                      position: "bottom",
                    });
                  }}
                >
                  <Icon
                    type="Ionicons"
                    name="ios-heart-empty"
                    style={{ color: "black", fontSize: 40 }}
                  />
                </Button>
              )}
            </Row>
          </Right>
        </ListItem>
      </Swipeout>
    );
  }

  return (
    <TouchableOpacity onPress={viewTrip}>
      <Card>
        <Image
          style={{ height: 200, width: null, flex: 1 }}
          source={{
            uri:
              trip.image ||
              "https://static.toiimg.com/photo/msid-66440799,width-96,height-65.cms",
          }}
        />
        <CardItem onPress={viewTrip}>
          <Body>
            <Markdown
              styles={{
                text: { fontSize: 16 },
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
            <Row>
              <Button onPress={viewTrip} transparent>
                <Text>View</Text>
              </Button>
              {trip.isFavorite === "T" && (
                <Icon
                  type="Ionicons"
                  name="ios-heart"
                  style={{ color: "red", fontSize: 20 }}
                />
              )}
            </Row>
          </Right>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default observer(TripItem);

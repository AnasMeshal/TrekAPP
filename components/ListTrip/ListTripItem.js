import React from "react";
import { observer } from "mobx-react";
import Swipeout from "react-native-swipeout";
import Markdown from "react-native-simple-markdown";

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

// Stores
import tripStore from "../../stores/tripStore";

const ListTripItem = ({ trip, navigation }) => {
  console.log("-------------------------------------------");
  console.log("ListTrip -> trip", trip);
  const swipeoutBtns = [
    {
      text: "Duplicate",
      backgroundColor: "blue",
      underlayColor: "rgba(0, 0, 0, 1, 0.6)",
    },
    {
      text: "Delete",
      backgroundColor: "red",
      underlayColor: "rgba(0, 0, 0, 1, 0.6)",
      //   onPress: async () => {
      //     await tripStore.tripDelete(trip.id);
      //   },
    },
  ];

  const tripPreview =
    trip.details.replace(/[^A-Za-z0-9.-:/$ ]/g, "").slice(0, 30) + "...";

  return (
    <Swipeout
      backgroundColor="transparent"
      right={swipeoutBtns}
      buttonWidth={100}
    >
      <ListItem thumbnail>
        <Left>
          {/* <Thumbnail
            square
            source={{
              uri:
                trip.image ||
                "https://static.toiimg.com/photo/msid-66440799,width-96,height-65.cms",
            }}
          /> */}
        </Left>
        <Body>
          <Markdown
            styles={{
              text: { fontSize: "16" },
            }}
            whitelist={["strong", "em"]}
          >
            trip.title
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
            tripPreview
          </Markdown>
        </Body>
        <Right>
          <Button transparent>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    </Swipeout>
  );
};

export default observer(ListTripItem);

import React from "react";
import { observer } from "mobx-react";

// Components
import TripList from "../TripList";
import Markdown from "react-native-simple-markdown";

// Styles
import {
  ProfileImage,
  ProfileName,
  ProfileNames,
  StyledBioView,
} from "./styles";
import { ScrollView } from "react-native";
import TripItem from "../TripList/TripItem";
import tripStore from "../../stores/tripStore";

// TODO have only one profile component

const OtherProfile = ({ route, navigation }) => {
  const { notMyProfile } = route.params;

  const otherProfileTrips = tripStore.trips
    .filter((trip) => trip.userId === notMyProfile.userId)
    .map((trip) => (
      <TripItem trip={trip} navigation={navigation} key={trip.id} />
    ));

  return (
    <ScrollView>
      <ProfileImage
        source={{
          uri:
            "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png",
        }}
      />

      <ProfileName>{notMyProfile.username}</ProfileName>
      <ProfileNames>
        {notMyProfile.firstName} {notMyProfile.lastName}
      </ProfileNames>
      <StyledBioView>
        <Markdown
          styles={{
            text: {
              fontSize: 25,
              color: "grey",
              textAlign: "center",
              //TODO CENTER IT FOR REAL
            },
          }}
          whitelist={["strong", "em"]}
        >
          {notMyProfile.bio}
        </Markdown>
      </StyledBioView>
      <TripList otherProfileTrips={otherProfileTrips} />
    </ScrollView>
  );
};

export default observer(OtherProfile);

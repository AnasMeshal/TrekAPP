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
import MapsButton from "../buttons/MapsButton";
import { Root } from "native-base";
import MapView from "react-native-maps";
import { ProfileButton, ProfileButtonText } from "../TripDetail/styles";

// TODO have only one profile component

const OtherProfile = ({ route, navigation }) => {
  const { notMyProfile } = route.params;

  const sortedTrips = tripStore.trips
    .filter((trip) => trip.userId === notMyProfile.userId)
    .filter((trip) => trip.isFavorite === "T")
    .concat(
      tripStore.trips
        .filter((trip) => trip.userId === notMyProfile.userId)
        .filter((trip) => trip.isFavorite !== "T")
    );

  const otherProfileTrips = sortedTrips.map((trip) => (
    <TripItem trip={trip} navigation={navigation} key={trip.id} />
  ));

  return (

    <ScrollView>
      <ProfileImage
        source={{
          uri:
            notMyProfile.image ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png",
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
              fontSize: 23,
              color: "grey",
              textAlign: "center",
              //TODO CENTER IT FOR REAL
            },
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
      <MapsButton notMyProfile={notMyProfile} />
    </Root>
  );
};

export default observer(OtherProfile);

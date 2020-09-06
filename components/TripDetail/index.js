import React, { useState } from "react";
import { observer } from "mobx-react";

// Stores
import listStore from "../../stores/listStore";
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

//Styles
import {
  TripImage,
  TripName,
  TripDetails,
  OtherTripName,
  OtherTripDetails,
  ProfileButton,
  ProfileButtonText,
  StyledView,
  StyledDetailView,
  WantToGoButton,
  WantToGoButtonText,
} from "./styles";
import { ScrollView, View, Dimensions } from "react-native";
import { Button, Text } from "native-base";

const TripDetail = ({ route, navigation }) => {
  const { myTrip } = route.params;
  const { notMyTrip } = route.params;
  const { notMyProfile } = route.params;
  const [editable, setEditable] = useState(false);

  const wantToGo = listStore.lists.find(
    (list) => list.name === "Want To Go" && list.userId === authStore.user.id
  );

  if (myTrip) {
    const [updatedTrip, setUpdatedTrip] = useState({
      title: myTrip.title,
      image: myTrip.image,
      details: myTrip.details,
      id: myTrip.id,
    });

    return (
      <ScrollView>
        <View>
          <TripImage
            source={{
              uri:
                "https://static.toiimg.com/photo/msid-66440799,width-96,height-65.cms",
            }}
          />
          {editable ? (
            <>
              <TripName
                maxLength={37}
                blurOnSubmit={true}
                multiline={true}
                placeholder={myTrip.title}
                placeholderTextColor="black"
                onChangeText={(title) =>
                  setUpdatedTrip({ ...updatedTrip, title })
                }
                onEndEditing={async () => {
                  await tripStore.tripUpdate(updatedTrip);
                }}
              />
              <TripDetails
                multiline={true}
                placeholder={myTrip.details}
                placeholderTextColor="grey"
                onChangeText={(details) =>
                  setUpdatedTrip({ ...updatedTrip, details })
                }
                onEndEditing={async () => {
                  await tripStore.tripUpdate(updatedTrip);
                }}
              />
            </>
          ) : (
            <>
              <StyledView>
                <OtherTripName
                  styles={{
                    text: {
                      fontSize: 40,
                      color: "black",
                      textAlign: "center",
                    },
                  }}
                  whitelist={["strong", "em"]}
                >
                  {myTrip.title}
                </OtherTripName>
              </StyledView>
              <StyledDetailView>
                <OtherTripDetails
                  styles={{
                    text: {
                      fontSize: 25,
                      color: "grey",
                      textAlign: "center",
                    },
                  }}
                  whitelist={[
                    "strong",
                    "link",
                    "url",
                    "video",
                    "image",
                    "heading",
                    "em",
                  ]}
                >
                  {myTrip.details}
                </OtherTripDetails>
              </StyledDetailView>

              <ProfileButton onPress={() => setEditable(true)}>
                <ProfileButtonText>Edit Trip</ProfileButtonText>
              </ProfileButton>

              <WantToGoButton
                onPress={() => listStore.addTripToList(wantToGo.id, myTrip.id)}
              >
                <WantToGoButtonText>Want To Go!</WantToGoButtonText>
              </WantToGoButton>
              <Button
                onPress={() => navigation.navigate("map", { myTrip: myTrip })}
              >
                <Text>View on Map</Text>
              </Button>
            </>
          )}
        </View>
      </ScrollView>
    );
  }

  /**
   * TODO
   * I think you can set editable to false for TextInput.
   * By doing that, you don't need this if statement and two returns.
   * My comment is: Clean up this code.
   * Look into this: https://dev.to/skptricks/react-native-enable-and-disable-textinput-programmatically-1b99#:~:text=If%20the%20value%20of%20editable,now%20enter%20value%20inside%20it.
   */

  return (
    <ScrollView>
      <View>
        <TripImage
          source={{
            uri:
              "https://static.toiimg.com/photo/msid-66440799,width-96,height-65.cms",
          }}
        />
        <StyledView>
          <OtherTripName
            styles={{
              text: {
                fontSize: 40,
                color: "black",
                textAlign: "center",
              },
            }}
            whitelist={["strong", "em"]}
          >
            {notMyTrip.title}
          </OtherTripName>
        </StyledView>
        <StyledDetailView>
          <OtherTripDetails
            styles={{
              text: {
                fontSize: 25,
                color: "grey",
                textAlign: "center",
              },
            }}
            whitelist={[
              "strong",
              "link",
              "url",
              "video",
              "image",
              "heading",
              "em",
            ]}
          >
            {notMyTrip.details}
          </OtherTripDetails>
        </StyledDetailView>
        <ProfileButton
          onPress={() =>
            navigation.navigate("OtherProfile", {
              notMyProfile: notMyProfile,
            })
          }
        >
          <ProfileButtonText>
            View {notMyProfile.username}'s Profile
          </ProfileButtonText>
        </ProfileButton>
        <WantToGoButton
          onPress={() => listStore.addTripToList(wantToGo.id, notMyTrip.id)}
        >
          <WantToGoButtonText>Want To Go!</WantToGoButtonText>
        </WantToGoButton>
      </View>
    </ScrollView>
  );
};

export default observer(TripDetail);

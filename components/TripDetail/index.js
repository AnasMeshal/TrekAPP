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
  DoneButton,
  StyledView,
  StyledDetailView,
  WantToGoButton,
  WantToGoButtonText,
  ChangeImageButton,
  ChangeImageButtonText,
  MapButtonStyled,
} from "./styles";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { ScrollView, View } from "react-native";
import { Toast } from "native-base";

const TripDetail = ({ route, navigation }) => {
  const { myTrip } = route.params;
  const { notMyTrip } = route.params;
  const { notMyProfile } = route.params;
  const [editable, setEditable] = useState(false);

  let wantToGo = [];
  if (authStore.user) {
    wantToGo = listStore.lists.find(
      (list) => list.name === "Want To Go" && list.userId === authStore.user.id
    );
  }
  const inWantToGo = wantToGo.trips.map((trip) => trip.id);

  // if () {
  //   console.log("im inside the want to go list");
  // } else if (hero.includes(notMyTrip && notMyTrip.id)) {
  //   console.log("im inside the want to go list");
  // } else {
  //   console.log("im not inside the want to go list");
  // }

  if (myTrip) {
    const [updatedTrip, setUpdatedTrip] = useState({
      title: myTrip.title,
      image: myTrip.image,
      details: myTrip.details,
      id: myTrip.id,
    });

    const getPermissionAsync = async () => {
      if (Platform.OS !== "web") {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    };

    getPermissionAsync();

    const pickImage = async () => {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          // ImagePicker saves the taken photo to disk and returns a local URI to it
          let localUri = result.uri;
          let filename = localUri.split("/").pop();

          // Infer the type of the image
          let match = /\.(\w+)$/.exec(filename);
          let type = match ? `image/${match[1]}` : `image`;

          await tripStore.tripUpdate(
            {
              ...updatedTrip,
              image: { uri: localUri, name: filename, type },
            },
            {
              ...updatedTrip,
              image: result.uri,
            }
          );

          setUpdatedTrip({
            ...updatedTrip,
            image: result.uri,
          });
          Toast.show({
            text: "Updated Trip Image",
            textStyle: {
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 20,
            },
            style: { backgroundColor: "#42d4f2e6" },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    return (
      // TODO FIX SCROLL VIEW

      <ScrollView>
        <View>
          <TripImage
            source={{
              uri:
                updatedTrip.image ||
                "https://static.toiimg.com/photo/msid-66440799,width-96,height-65.cms",
            }}
          />
          {editable ? (
            <>
              <ChangeImageButton transparent onPress={pickImage}>
                <ChangeImageButtonText>Change Image</ChangeImageButtonText>
              </ChangeImageButton>
              <TripName
                maxLength={37}
                blurOnSubmit={true}
                multiline={true}
                placeholder={updatedTrip.title}
                placeholderTextColor="black"
                onChangeText={(title) =>
                  setUpdatedTrip({ ...updatedTrip, title })
                }
                onEndEditing={async () => {
                  await tripStore.tripUpdate(updatedTrip),
                    navigation.setParams({ title: updatedTrip.title }),
                    Toast.show({
                      text: "Updated Trip Title",
                      textStyle: {
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 20,
                      },
                      style: { backgroundColor: "#42d4f2e6" },
                    });
                }}
              />
              <TripDetails
                multiline={true}
                placeholder={updatedTrip.details}
                placeholderTextColor="grey"
                onChangeText={(details) =>
                  setUpdatedTrip({ ...updatedTrip, details })
                }
                onEndEditing={async () => {
                  await tripStore.tripUpdate(updatedTrip),
                    Toast.show({
                      text: "Updated Trip Title",
                      textStyle: {
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 20,
                      },
                      style: { backgroundColor: "#42d4f2e6" },
                    });
                }}
              />
              <DoneButton onPress={() => setEditable(false)}>
                <ProfileButtonText>Done</ProfileButtonText>
              </DoneButton>
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
              <View>
                <ProfileButton onPress={() => setEditable(true)}>
                  <ProfileButtonText>Edit Trip</ProfileButtonText>
                </ProfileButton>

                <MapButtonStyled
                  onPress={() => navigation.navigate("map", { myTrip: myTrip })}
                >
                  <ProfileButtonText>View on Map</ProfileButtonText>
                </MapButtonStyled>
                {authStore.user && (
                  <WantToGoButton
                    onPress={() => {
                      listStore.addTripToList(wantToGo.id, myTrip.id);
                      Toast.show({
                        text: inWantToGo.includes(myTrip && myTrip.id)
                          ? "List Already has been Added to Want To Go List"
                          : "List Added to Want To Go List",
                        textStyle: {
                          fontWeight: "bold",
                          textAlign: "center",
                          fontSize: 20,
                        },
                        style: {
                          backgroundColor: "#42d4f2e6",
                        },
                      });
                    }}
                  >
                    <WantToGoButtonText>Want To Go!</WantToGoButtonText>
                  </WantToGoButton>
                )}
              </View>
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
      <TripImage
        source={{
          uri:
            notMyTrip.image ||
            "https://static.toiimg.com/photo/msid-66440799,width-96,height-65.cms",
        }}
      />
      <View>
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
        <View>
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
          <MapButtonStyled
            onPress={() =>
              navigation.navigate("map", {
                myTrip: notMyTrip,
              })
            }
          >
            <ProfileButtonText>View on Map</ProfileButtonText>
          </MapButtonStyled>
          {authStore.user && (
            <WantToGoButton
              onPress={() => {
                listStore.addTripToList(wantToGo.id, notMyTrip.id);
                Toast.show({
                  text: inWantToGo.includes(notMyTrip && notMyTrip.id)
                    ? "List Already has been Added to Want To Go List"
                    : "List Added to Want To Go List",
                  textStyle: {
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 20,
                  },
                  style: { backgroundColor: "#42d4f2e6" },
                });
              }}
            >
              <WantToGoButtonText>Want To Go!</WantToGoButtonText>
            </WantToGoButton>
          )}
        </View>
      </View>
    </ScrollView>
  );
};
export default observer(TripDetail);

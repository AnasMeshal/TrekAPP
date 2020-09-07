// TODO MAKE THIS MODAL
import React, { useState } from "react";
import { observer } from "mobx-react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

//Google Autocomplete
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GOOGLE_API_KEY = "API KEY HERE";

// Styles
import { Content, Form, Item, Label, Input, Text, Toast } from "native-base";
import {
  AddTripButtonStyled,
  ImageItem,
  ImagePreview,
  ImageButton,
} from "./styles";

// Stores
import tripStore from "../../stores/tripStore";

const AddTrip = ({ navigation }) => {
  const [trip, setTrip] = useState({
    title: "",
    image: null,
    details: "",
    latitude: "",
    longitude: "",
    location: "",
  });

  const [image, setImage] = useState(null);

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

        setImage({ image: result.uri });
        setTrip({ ...trip, image: { uri: localUri, name: filename, type } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    if (trip.title !== "" && trip.image !== null && trip.details !== "") {
      await tripStore.tripCreate(trip);
      navigation.navigate("Profile");
      Toast.show({
        text: "Your Trip Was Added",
        textStyle: {
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 20,
        },
        style: { backgroundColor: "#42d4f2e6" },
      });
    } else {
      alert("You Must fill out all the fields");
    }
  };
  //TODO ON TITLE AND DETAILS Error Input Textbox

  return (
    <Content>
      <Form>
        {image && (
          <ImagePreview
            source={{ uri: image.image }}
            style={{ width: 200, height: 200 }}
          />
        )}
        <ImageItem>
          <ImageButton onPress={pickImage}>
            <Text>{image ? "Change Image" : "Insert Image"}</Text>
          </ImageButton>
        </ImageItem>
        <Item floatingLabel>
          <Label>Title</Label>
          <Input onChangeText={(title) => setTrip({ ...trip, title })} />
        </Item>
        <Item floatingLabel last>
          <Label>Details</Label>
          <Input
            multiline={true}
            style={{ textAlignVertical: "top" }}
            onChangeText={(details) => setTrip({ ...trip, details })}
          />
        </Item>  
          <Item>
            <GooglePlacesAutocomplete
              placeholder="Search"
              fetchDetails={true}
              onPress={(data, details = null) => {
                setTrip({
                  ...trip,
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                  location: details.address_components[0].long_name,
                });
              }}
              query={{
                key: GOOGLE_API_KEY,
                language: "en",
              }}
            />
          </Item>
      </Form>
      <AddTripButtonStyled block onPress={handleSubmit}>
        <Text>Add</Text>
      </AddTripButtonStyled>
    </Content>
   
       
  );
};

export default observer(AddTrip);

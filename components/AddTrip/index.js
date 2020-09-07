// TODO MAKE THIS MODAL
import React, { useState } from "react";
import { observer } from "mobx-react";

//Google Autocomplete
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GOOGLE_API_KEY = "API KEY HERE";

// Styles
import {
  Content,
  Form,
  Item,
  Label,
  Input,
  Text,
  Toast,
  Root,
} from "native-base";
import { AddTripButtonStyled } from "./styles";

// Stores
import tripStore from "../../stores/tripStore";

const AddTrip = ({ navigation }) => {
  const [trip, setTrip] = useState({
    title: "",
    image: "",
    details: "",
    latitude: "",
    longitude: "",
    location: "",
  });

  const handleSubmit = async () => {
    if (trip.title !== "" /* && trip.image !== "" */ && trip.details !== "") {
      await tripStore.tripCreate(trip);
      navigation.navigate("Profile");
      // TODO MAKE IT GLOBAL
      Toast.show({
        text: "Trip Added",
      });
    } else {
      alert("You Must fill out all the fields");
    }
  };

  return (
    <Root>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input onChangeText={(title) => setTrip({ ...trip, title })} />
          </Item>
          <Item floatingLabel>
            <Label>Image</Label>
            <Input onChangeText={(image) => setTrip({ ...trip, image })} />
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
    </Root>
  );
};

export default observer(AddTrip);

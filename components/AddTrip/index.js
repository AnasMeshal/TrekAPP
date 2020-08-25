import React, { useState } from "react";
import {
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
  Toast,
  Root,
} from "native-base";
import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";

const AddTrip = ({ navigation }) => {
  const [trip, setTrip] = useState({
    title: "",
    image: "",
    details: "",
  });

  const handleSubmit = async () => {
    if (trip.title !== "" /* && trip.image !== "" */ && trip.details !== "") {
      await tripStore.tripCreate(trip);
      navigation.navigate("Trips");
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
            <Input onChangeText={(details) => setTrip({ ...trip, details })} />
          </Item>
        </Form>
        <Button
          style={{ marginRight: "5%", marginLeft: "5%", marginTop: "5%" }}
          block
          primary
          onPress={handleSubmit}
        >
          <Text>Add</Text>
        </Button>
      </Content>
    </Root>
  );
};

export default observer(AddTrip);

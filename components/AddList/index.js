// TODO MAKE THIS MODAL
import React, { useState } from "react";
import { observer } from "mobx-react";

// Styles
import { Content, Form, Item, Label, Input, Text, Toast } from "native-base";
import { AddTripButtonStyled } from "./styles";

// Stores
import listStore from "../../stores/listStore";

const AddList = ({ navigation }) => {
  const [list, setList] = useState({
    name: "",
  });

  const handleSubmit = async () => {
    if (list.name !== "" && list.name !== "Want To Go") {
      await listStore.listCreate(list);
      navigation.navigate("Lists");
      // TODO MAKE IT GLOBAL
      Toast.show({
        text: "List Added",
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

  return (
    <Content>
      <Form>
        <Item floatingLabel>
          <Label>Name</Label>
          <Input onChangeText={(name) => setList({ ...list, name })} />
        </Item>
      </Form>
      <AddTripButtonStyled block onPress={handleSubmit}>
        <Text>Add</Text>
      </AddTripButtonStyled>
    </Content>
  );
};

export default observer(AddList);

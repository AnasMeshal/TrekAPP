// Styled components
import styled from "styled-components";
import { Content, Button, Form, Item, Image } from "native-base";

export const AddTripButtonStyled = styled(Button)`
  background-color: #42d4f2;
  margin-right: 5%;
  margin-left: 5%;
  margin-top: 5%;
`;

export const ImageItem = styled(Item)`
  margin-top: 15px;
  justify-content: center;
  border-bottom-width: 0px;
`;

export const ImagePreview = styled.Image`
  align-self: center;
  border-radius: 10px;
  margin-top: 15px;
`;

export const ImageButton = styled(Button)`
  background-color: #37a0db;
`;

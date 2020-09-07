// Styled components
import styled from "styled-components";
import { Button, Text, View, Icon } from "native-base";
import Markdown from "react-native-simple-markdown";

export const TripImage = styled.Image`
  width: 100%;
  min-height: 45%;
  align-self: center;
`;

export const TripName = styled.TextInput`
  font-size: 40px;
  text-align: center;
  color: black;
  padding-right: 5px;
  padding-left: 5px;
  margin-top: 10px;
`;

export const TripDetails = styled.TextInput`
  font-size: 25px;
  text-align: center;
  color: grey;
  padding-right: 5px;
  padding-left: 5px;
`;

export const ProfileButton = styled(Button)`
  background-color: #42d4f2;
  margin-top: 15px;
  align-self: center;
  width: 70%;
  align-items: center;
`;

export const MapButtonStyled = styled(Button)`
  background-color: #42d4f2;
  margin-top: 20px;
  align-self: center;
  width: 40%;
  align-items: center;
`;
export const ChangeImageButton = styled(Button)`
  margin-top: 10px;
  align-self: center;
  align-items: center;
`;

export const DoneButton = styled(Button)`
  background-color: #42d4f2;
  margin-top: 25px;
  align-self: center;
  width: 30%;
  align-items: center;
`;

export const ProfileButtonText = styled(Text)`
  color: white;
  font-weight: bold;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const ChangeImageButtonText = styled(Text)`
  color: #42d4f2;
  font-weight: bold;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const WantToGoButton = styled(Button)`
  background-color: transparent;
  margin-top: 10px;
  margin-bottom: 100px;

  align-self: center;
  width: 30%;
  align-items: center;
`;

export const WantToGoButtonText = styled(Text)`
  color: #42d4f2;
  font-weight: bold;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledView = styled(View)`
  text-align: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  display: flex;
  margin-top: 10;
  padding-right: auto;
  padding-left: auto;
  margin-left: 5px;
  margin-right: 5px;
`;

export const OtherTripName = styled(Markdown)`
  /* text-align: center; */

  /* <Markdownstyles={{heading1: {fontSize: 20, },
    strong: {
      fontWeight: 'bold',
    }
  }}
> */
  /* 
  &.header {
    font-size: 40px;
    text-align: center;
    color: black;
    padding-right: 5px;
    padding-left: 5px;
    margin-top: 20px;
  } */
`;
export const StyledDetailView = styled(View)`
  text-align: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  display: flex;
  margin-top: 5px;
  padding-right: auto;
  padding-left: auto;
  margin-left: 5px;
  margin-right: 5px;
`;

export const OtherTripDetails = styled(Markdown)``;

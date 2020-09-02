// Styled components
import styled from "styled-components";
import { Button, Text } from "native-base";

export const TripImage = styled.Image`
  width: 100%;
  min-height: 50%;
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

export const OtherTripName = styled.Text`
  font-size: 40px;
  text-align: center;
  color: black;
  padding-right: 5px;
  padding-left: 5px;
  margin-top: 20px;
`;

export const OtherTripDetails = styled.Text`
  font-size: 25px;
  text-align: center;
  color: grey;
  padding-right: 5px;
  padding-left: 5px;
`;

export const ProfileButton = styled(Button)`
  background-color: #42d4f2;
  margin-top: 75px;
  align-self: center;
  width: 70%;
  align-items: center;
`;

export const ProfileButtonText = styled(Text)`
  color: white;
  font-weight: bold;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

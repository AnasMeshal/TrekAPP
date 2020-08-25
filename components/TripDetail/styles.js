//Styled components
import styled from "styled-components";
import { Button } from "native-base";

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

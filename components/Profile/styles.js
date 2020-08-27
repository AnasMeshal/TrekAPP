//Styled components
import styled from "styled-components";
import { Button } from "native-base";

export const ProfileImage = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
`;

export const ProfileName = styled.TextInput`
  font-size: 40px;
  text-align: center;
  color: black;
  padding-right: 5px;
  padding-left: 5px;
  margin-top: 10px;
`;

export const ProfileBio = styled.TextInput`
  font-size: 25px;
  text-align: center;
  color: grey;
  padding-right: 5px;
  padding-left: 5px;
`;

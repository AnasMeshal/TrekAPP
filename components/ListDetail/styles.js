// Styled components
import styled from "styled-components";
import { Button, Text } from "native-base";

export const ListNameInput = styled.TextInput`
  font-size: 40px;
  align-self: center;
`;

export const ListNameText = styled.Text`
  font-size: 35px;
  align-self: center;
`;

export const StyledTitle = styled.Text`
  font-size: 30px;
  align-self: center;
  color: red;
  text-align: center;
  padding: 20px;
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

export const NoFavoritesText = styled.Text`
  font-size: 30px;
  color: black;
  text-align: center;
  padding: 20px;
`;

export const NoFavoritesMsg = styled.Text`
  font-size: 20px;
  color: grey;
  text-align: center;
  padding: 20px;
`;

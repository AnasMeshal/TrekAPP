//Styled components

/* TODO:
 REDIRECT
 close keyboard on return in details
*/

import styled from "styled-components/native";
import { Button, Text } from "native-base";

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: white;
  text-align: center;
  width: 80%;
  align-self: center;
  padding-top: 20px;
  padding-bottom: 20px;
  opacity: 0.6;
  margin-bottom: 180px;
`;

export const SignInButtonStyled = styled(Button)`
  background-color: #42d4f2;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 50px;
  padding-right: 40px;
  padding-left: 40px;
`;

export const SignUpButtonStyled = styled(Button)`
  background-color: #42d4f2;
  align-self: center;
  border-radius: 50;
  padding-right: 40px;
  padding-left: 40px;
`;

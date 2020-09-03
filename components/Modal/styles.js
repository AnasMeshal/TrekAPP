import styled from "styled-components";
import { Icon } from "native-base";

export const AuthButton = styled.TouchableOpacity`
  background-color: transparent;
  border: 1px;
  align-self: center;
  border-radius: 50px;
  border-color: white;
  padding: 15px 50px;
  margin-top: 20px;
`;

export const AuthButtonText = styled.Text`
  color: white;

  font-size: 18px;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: lavender;
  padding-right: 60px;
  padding-left: 60px;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const AuthOther = styled.Text`
  color: orange;
  margin-top: 15px;
  text-align: center;
`;

export const AuthTitle = styled.Text`
  color: whitesmoke;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: lightgreen;
  text-align: center;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: black;
  border-bottom-color: white;
  border-bottom-width: 1px;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  flex: 1;
  align-self: stretch;
  padding-right: 60px;
  padding-left: 60px;
`;

export const BackgroundTint = styled.View`
  background-color: rgba(0, 0, 0, 0.7);
`;

export const X = styled(Icon)`
  position: absolute;
  color: white;
  top: 30px;
  right: 5px;
  font-size: 40px;
`;

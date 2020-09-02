// Styled components
import styled from "styled-components";
import { Button, Text } from "native-base";

export const ProfileImage = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
`;

export const ProfileName = styled(Text)`
  font-size: 40px;
  text-align: center;
  color: black;
  padding-right: 5px;
  padding-left: 5px;
  margin-top: 10px;
  font-weight: bold;
`;

export const ProfileNames = styled(Text)`
  font-size: 20px;
  text-align: center;
  color: black;
  padding-right: 5px;
  padding-left: 5px;
`;

export const ProfileBio = styled.TextInput`
  font-size: 25px;
  text-align: center;
  color: grey;
  padding-right: 5px;
  padding-left: 5px;
`;

export const SignInOrSignUpButton = styled(Button)`
  align-self: center;
  margin-top: 30px;
  background-color: #42d4f2;
`;

export const StyledText = styled.Text`
  margin-top: 55%;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  width: 90%;
  align-self: center;
`;

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
  border-radius: 50px;
  padding-right: 40px;
  padding-left: 40px;
`;
export const SkipButtonStyled = styled(Button)`
  margin-right: auto;
  margin-left: auto;
  /* margin-top: 100px; */
`;

export const SkipTextStyled = styled(Text)`
  font-weight: bold;
`;

// Styled components
import styled from "styled-components";
import { Button, Text, Icon } from "native-base";

export const ProfileImage = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-top: 10px;
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

export const FavoritesText = styled.Text`
  font-size: 40px;
  color: black;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`;

export const NoFavoritesText = styled.Text`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 20px;
`;

export const NoFavoritesMsg = styled.Text`
  font-size: 20px;
  color: grey;
  text-align: center;
  padding-bottom: 20px;
`;

export const FavoritesButton = styled(Button)`
  background-color: #42d4f2;
  margin-top: 15px;
  align-self: center;
  width: 70%;
  align-items: center;
`;

export const FavoritesButtonText = styled(Text)`
  color: white;
  font-weight: bold;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const ProfileImageButton = styled(Button)`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-top: 10px;
  align-self: center;
`;

export const IconWrapper = styled.View`
  background-color: #42d4f2;
  opacity: 0.9;
  border-radius: 50px;
  width: 45px;
  height: 45px;
  align-self: flex-end;
  position: absolute;
  bottom: 1%;
  right: 3%;
`;

export const IconStyled = styled(Icon)`
  font-size: 40px;
  color: white;
  margin: auto;
  align-self: center;
`;

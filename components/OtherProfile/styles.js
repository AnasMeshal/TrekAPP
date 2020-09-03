// Styled components
import styled from "styled-components";
import { Text, View } from "native-base";

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

export const StyledBioView = styled(View)`
  text-align: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  display: flex;
  padding-right: auto;
  padding-left: auto;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

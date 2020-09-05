// Styled components
import styled from "styled-components";
import { Icon, Text, Button } from "native-base";

export const GoBackIcon = styled(Icon)`
  color: white;
  margin-left: 10px;
`;

export const IconWrapper = styled.View`
  background-color: #42d4f2;
  opacity: 0.8;
  border-radius: 50px;
  width: 15%;
  align-self: flex-end;
  position: absolute;
  bottom: 3%;
  right: 7%;
`;

export const IconStyled = styled(Icon)`
  font-size: 50px;
  color: white;
  padding-right: 5%;
  padding-left: 5%;
  align-self: center;
`;

export const LogOutStyled = styled(Icon)`
  color: #ff362e;
  margin-left: 10px;
`;

export const OpenDrawerIcon = styled(Icon)`
  font-size: 35px;
  justify-content: center;
  align-self: center;
  margin-right: 5px;
  margin-top: auto
  margin-bottom: auto
`;

export const AddListButtonStyle = styled(Icon)`
  font-size: 40px;
  align-self: center;
  margin-left: 10px;
`;

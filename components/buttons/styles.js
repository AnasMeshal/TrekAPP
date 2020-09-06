// Styled components
import styled from "styled-components";
import { Icon, Text, Button } from "native-base";

export const GoBackIcon = styled(Icon)`
  color: white;
  margin-left: 10px;
`;

export const IconWrapper = styled(Button)`
  background-color: #42d4f2;
  opacity: 0.95;
  border-radius: 50px;
  width: 60px;
  height: 60px;
  position: absolute;
  justify-content: center;
  bottom: 3%;
  right: 7%;
`;

export const IconStyled = styled(Icon)`
  font-size: 50px;
  color: white;
  margin: auto;
  margin-top: -3px;
  align-self: center;
`;

export const LogOutStyled = styled(Icon)`
  color: #ff362e;
  margin-left: 10px;
`;

export const FilterStyled = styled(Text)`
  font-weight: 500;
  color: white;
  margin-right: -22px;
  font-size: 15px;
`;

export const FilterButtonStyled = styled(Button)`
  background-color: grey;
  opacity: 0.95;
  margin-left: auto;
  margin-right: 15px;
  margin-top: 10px;
  margin-bottom: 4px;
`;
export const SortButtonStyled = styled(Button)`
  background-color: grey;
  opacity: 0.95;
  margin-right: auto;
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 4px;
`;

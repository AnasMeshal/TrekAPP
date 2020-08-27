//Styled components
import styled from "styled-components";
import { Icon } from "native-base";

export const GoBackIcon = styled(Icon)`
  color: white;
  margin-left: 10px;
`;

export const IconWrapper = styled.View`
  background-color: #42d4f2;
  opacity: 0.8;
  border-radius: 50;
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

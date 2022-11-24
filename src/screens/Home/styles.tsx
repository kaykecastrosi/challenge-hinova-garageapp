import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  align-items: center;
  padding-top: ${StatusBar.currentHeight}px;
`;

export const Header = styled.View`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding-left: 20px;
  padding-top: 40px;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 32px;
  font-family: "Inter_600SemiBold";
`;

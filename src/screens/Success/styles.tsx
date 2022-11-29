import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  align-items: center;
  justify-content: center;
  padding-top: ${StatusBar.currentHeight}px;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 28px;
  margin: 16px;
  text-align: center;
  font-family: "Inter_600SemiBold";
`;

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  background-color: #000;
  height: 48px;
  border-radius: 16px;
  padding: 10px;
  margin: 8px;
`;

export const ButtonTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: "Inter_700Bold";
  margin-right: 10px;
`;

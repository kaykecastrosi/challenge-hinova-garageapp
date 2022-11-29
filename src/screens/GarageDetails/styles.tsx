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
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  margin-bottom: 16px;
`;

export const HeaderOptions = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

export const Details = styled.ScrollView`
  display: flex;
  width: 100%;
  background-color: #fafafa;
`;

export const Title = styled.Text`
  color: #000;
  align-self: flex-start;
  font-size: 32px;
  font-family: "Inter_600SemiBold";
`;

export const Description = styled.Text`
  color: #000;
  align-self: flex-start;
  font-size: 16px;
  text-align: left;
  font-family: "Inter_400Regular";
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Address = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  margin-top: 8px;
  justify-content: center;
  align-self: flex-start;
`;

export const Image = styled.Image`
  display: flex;
  width: 100%;
  border-radius: 16px;
  border: 2px solid #000;
  height: 128px;
  margin-bottom: 16px;
`;

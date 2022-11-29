import React from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface IProps {
  title: string;
  icon: React.ComponentProps<typeof Feather>["name"];
  onPress?: () => void;
}

const Button: React.FC<IProps> = ({ title, icon, onPress }) => {
  return (
    <Container onPress={() => onPress?.()}>
      <Feather name={icon} size={22} color="white" />
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 150px;
  background-color: #000;
  height: 48px;
  border-radius: 16px;
  padding: 10px;
  margin: 8px;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: "Inter_700Bold";
  margin-left: 10px;
`;

export default Button;

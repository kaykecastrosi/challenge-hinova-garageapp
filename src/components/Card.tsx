import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

interface IProps {
  title: string;
  description: string;
}

const Card: React.FC<IProps> = ({ title, description }) => {
  return (
    <Container>
      <Row>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Row>
      <AntDesign name="arrowright" size={30} color="white" />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  margin: 16px;
  flex-direction: row;
  align-items: center;
  width: 90%;
  background-color: #000;
  height: 150px;
  border-radius: 16px;
  padding: 16px;
`;

const Row = styled.View`
  display: flex;
  width: 80%;
  margin: 8px;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: "Inter_700Bold";
`;

const Description = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: "Inter_400Regular";
  margin-top: 12px;
`;

export default Card;

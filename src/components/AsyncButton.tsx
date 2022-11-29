import React from "react";
import styled from "styled-components/native";

interface IProps {
  title: string;
  onPress?: () => {};
  loading: boolean;
}

const AsyncButton: React.FC<IProps> = ({ title, onPress, loading }) => {
  return (
    <Container onPress={() => onPress?.()}>
      {loading && <LoadingIndicator />}
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #000;
  height: 48px;
  border-radius: 16px;
  padding: 10px;
  margin: 8px;
`;

const LoadingIndicator = styled.ActivityIndicator`
  position: absolute;
  right: 75%;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: "Inter_700Bold";
  margin-left: 10px;
`;

export default AsyncButton;

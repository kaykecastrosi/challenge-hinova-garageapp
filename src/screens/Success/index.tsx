import React from "react";
import { StatusBar } from "expo-status-bar";
import { Container, Title, ButtonContainer, ButtonTitle } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export default function Success() {
  const navigation = useNavigation();

  return (
    <Container>
      <Feather name="check-circle" size={100} color="black" />
      <Title>{`Indicação enviada\ncom sucesso!`}</Title>
      <ButtonContainer
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          })
        }
      >
        <ButtonTitle>Prosseguir para a página inicial</ButtonTitle>
        <Feather name="arrow-right" size={22} color="white" />
      </ButtonContainer>
      <StatusBar style="auto" />
    </Container>
  );
}

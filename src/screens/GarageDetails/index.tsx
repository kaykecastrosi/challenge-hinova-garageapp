import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Header,
  HeaderOptions,
  Container,
  Title,
  LoadingIndicator,
} from "./styles";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export interface IGarage {
  Nome: string;
}

export default function GarageDetails() {
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderOptions>
          <AntDesign
            onPress={() => navigation.goBack()}
            style={{ marginRight: 2 }}
            name="arrowleft"
            size={32}
            color="black"
          />
          <AntDesign
            onPress={() => navigation.navigate("Home")}
            style={{ marginRight: 2 }}
            name="home"
            size={32}
            color="black"
          />
        </HeaderOptions>
        <Title>Consultar oficinas</Title>
      </Header>
      {loading ? <LoadingIndicator size={64} color="black" /> : <></>}
      <StatusBar style="auto" />
    </Container>
  );
}

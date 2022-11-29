import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Header, HeaderOptions, Container, Title, Image } from "./styles";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { IGarageDetailsProps } from "../../../global";

export default function GarageDetails() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<IGarageDetailsProps>>();

  const item = route.params.item;

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
        <Title>{item.Nome}</Title>
        <Image source={{ uri: `data:image/png;base64, ${item.Foto}` }} />
      </Header>

      <StatusBar style="auto" />
    </Container>
  );
}

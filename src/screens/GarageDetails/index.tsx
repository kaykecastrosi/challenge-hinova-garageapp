import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Header,
  HeaderOptions,
  Container,
  Title,
  Image,
  Description,
  Details,
  Row,
  Address,
} from "./styles";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { IGarageDetailsProps } from "../../../global";
import Button from "../../components/Button";
import { Linking, Platform } from "react-native";

export default function GarageDetails() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<IGarageDetailsProps>>();

  const item = route.params.item;

  async function handleExternalLinks(prefix: string, url: string | null) {
    await Linking.openURL(prefix + url);
  }

  async function openMaps(latitude: string | null, longitude: string | null) {
    const daddr = `${latitude},${longitude}`;
    const company = Platform.OS === "ios" ? "apple" : "google";
    Linking.openURL(`http://maps.${company}.com/maps?daddr=${daddr}`);
  }

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
      </Header>
      <Details
        contentContainerStyle={{
          display: "flex",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Image source={{ uri: `data:image/png;base64, ${item.Foto}` }} />
        <Title>{item.Nome}</Title>
        <Address
          onPress={async () => await openMaps(item.Latitude, item.Longitude)}
        >
          <Feather
            style={{ marginRight: 8 }}
            name="map-pin"
            size={16}
            color="gray"
          />
          <Description style={{ color: "gray", fontSize: 14, maxWidth: "90%" }}>
            {item.Endereco}
          </Description>
        </Address>
        <Description>{item.Descricao?.split("\\n").join("\n")}</Description>
        <Address
          onPress={async () => await handleExternalLinks("mailto:", item.Email)}
        >
          <Feather
            style={{ marginRight: 8 }}
            name="at-sign"
            size={16}
            color="gray"
          />
          <Description style={{ color: "gray", fontSize: 14, maxWidth: "90%" }}>
            {"E-mail: " + item.Email}
          </Description>
        </Address>
        <Row>
          {item.Telefone1 ? (
            <Button
              title="Telefone 1"
              icon="phone"
              onPress={async () =>
                await handleExternalLinks("tel:", item.Telefone1)
              }
            />
          ) : null}
          {item.Telefone2 ? (
            <Button
              title="Telefone 2"
              icon="phone"
              onPress={async () =>
                await handleExternalLinks("tel:", item.Telefone2)
              }
            />
          ) : null}
        </Row>
      </Details>
      <StatusBar style="auto" />
    </Container>
  );
}

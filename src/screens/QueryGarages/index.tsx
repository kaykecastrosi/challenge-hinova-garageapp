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

import Garage from "../../components/Garage";

export interface IGarage {
  Nome: string;
}

export default function QueryGarages() {
  const [loading, setLoading] = useState(true);

  const [garages, setGarages] = useState<IGarage[]>([]);
  useEffect(() => {
    api.get("/oficina?codigoAssociacao=601").then((r) => {
      if (r.data.RetornoErro.retornErro !== true) {
        setGarages(r.data.ListaOficinas);
        setLoading(false);
      }
    });
  }, []);

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
      {loading ? (
        <LoadingIndicator size={64} color="black" />
      ) : (
        <>
          {garages.map((item, index) => (
            <Garage
              key={index}
              name={item.Nome}
              active={true}
              onPress={() => {}}
            />
          ))}
        </>
      )}
      <StatusBar style="auto" />
    </Container>
  );
}

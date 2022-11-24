import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Header, Container, Title } from "./styles";
import api from "../../services/api";

import Card from "../../components/Card";

export default function Home() {
  useEffect(() => {
    api
      .get("/oficina?codigoAssociacao=601")
      .then((r) => console.log(r.data.ListaOficinas));
  }, []);
  return (
    <Container>
      <Header>
        <Title>Bem vindo</Title>
      </Header>
      <Card
        title="Consultar oficinas"
        description="Verifique as oficinas disponíveis e tenha acesso à detalhes como e-mail, endereço, telefone, etc."
      />
      <Card
        title="Indicar um amigo"
        description="Verifique as oficinas disponíveis e tenha acesso à detalhes como e-mail, endereço, telefone, etc."
      />
      <StatusBar style="auto" />
    </Container>
  );
}

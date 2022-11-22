import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Container, Title } from "./styles";
import api from "../../services/api";

export default function Home() {
  useEffect(() => {
    api.get("/oficina").then((r) => console.log(r));
  }, []);
  return (
    <Container>
      <Title>Open up App.tsx to start working on your app!</Title>
      <StatusBar style="auto" />
    </Container>
  );
}

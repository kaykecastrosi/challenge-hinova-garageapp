import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Header, HeaderOptions, Container, Title, Details } from "./styles";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AsyncButton from "../../components/AsyncButton";

const phoneRegex =
  /\(?\b([0-9]{2,3}|0((x|[0-9]){2,3}[0-9]{2}))\)?\s*[0-9]{4,5}[- ]*[0-9]{4}\b/;
const licenseRegex = /[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/;
const cpfRegex = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;

const fieldsValidationSchema = yup.object().shape({
  CodigoAssociacao: yup
    .number()
    .integer("O código deve ser um número inteiro")
    .positive("O código deve ser um número positivo")
    .typeError("O código deve ser um número")
    .required("Campo obrigatório"),
  CpfAssociado: yup
    .string()
    .matches(cpfRegex, "O campo deve ser um CPF válido")
    .required("Campo obrigatório"),
  EmailAssociado: yup
    .string()
    .email("O campo deve ser um e-mail válido")
    .required("Campo obrigatório"),
  NomeAssociado: yup.string().required("Campo obrigatório"),
  TelefoneAssociado: yup
    .string()
    .matches(phoneRegex, "O campo deve ser um número de telefone válido")
    .required("Campo obrigatório"),
  PlacaVeiculoAssociado: yup
    .string()
    .matches(licenseRegex, "O campo deve ser uma placa veicular válida")
    .required("Campo obrigatório"),
  NomeAmigo: yup.string().required("Campo obrigatório"),
  TelefoneAmigo: yup
    .string()
    .matches(phoneRegex, "O campo deve ser um número de telefone válido")
    .required("Campo obrigatório"),
  EmailAmigo: yup.string().email().required("Campo obrigatório"),
  Observacao: yup.string(),
});

export default function QueryGarages() {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(fieldsValidationSchema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    api
      .post("/indicacao", {
        Indicacao: data,
        Remetente: data.EmailAssociado,
        Copias: [],
      })
      .then((r) => {
        console.log(r.data);
        setLoading(false);
      });
  };

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
        <Title>Indicar um amigo</Title>
      </Header>
      <Details
        contentContainerStyle={{
          display: "flex",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Input
          name="Código da Associação"
          placeholder="Ex: 100"
          control={control}
          error={errors.CodigoAssociacao}
          identifier="CodigoAssociacao"
        />
        <Input
          name="CPF do Associado"
          placeholder="Ex: 99999999999"
          control={control}
          error={errors.CpfAssociado}
          identifier="CpfAssociado"
        />
        <Input
          name="E-mail do Associado"
          placeholder="Ex: contato@email.com"
          control={control}
          error={errors.EmailAssociado}
          identifier="EmailAssociado"
        />
        <Input
          name="Nome do Associado"
          placeholder="Ex: Romulo Carneiro"
          control={control}
          error={errors.NomeAssociado}
          identifier="NomeAssociado"
        />
        <Input
          name="Telefone do Associado"
          placeholder="Ex: 31999999999"
          control={control}
          error={errors.TelefoneAssociado}
          identifier="TelefoneAssociado"
        />
        <Input
          name="Placa do Veículo do Associado"
          placeholder="Ex: AAA9A99"
          control={control}
          error={errors.PlacaVeiculoAssociado}
          identifier="PlacaVeiculoAssociado"
        />
        <Input
          name="Nome do Amigo"
          placeholder="Ex: Kayke Castro"
          control={control}
          error={errors.NomeAmigo}
          identifier="NomeAmigo"
        />
        <Input
          name="Telefone do Amigo"
          placeholder="Ex: 31999999999"
          control={control}
          error={errors.TelefoneAmigo}
          identifier="TelefoneAmigo"
        />
        <Input
          name="E-mail do Amigo"
          placeholder="Ex: contato@email.com"
          control={control}
          error={errors.EmailAmigo}
          identifier="EmailAmigo"
        />
        <Input
          name="Observações"
          placeholder="Adicione aqui suas observações"
          control={control}
          error={errors.Observacao}
          identifier="Observacao"
        />
        <AsyncButton
          title="Enviar indicação"
          onPress={handleSubmit(onSubmit)}
          loading={loading}
        />
      </Details>
      <StatusBar style="auto" />
    </Container>
  );
}

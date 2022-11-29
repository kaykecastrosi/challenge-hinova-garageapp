import type { NavigatorScreenParams } from "@react-navigation/native";

export interface IGarageItem {
  Id: number;
  Nome: string | null;
  Descricao: string | null;
  DescricaoCurta: string | null;
  Endereco: string | null;
  Latitude: string | null;
  Longitude: string | null;
  Foto: string | null;
  AvaliacaoUsuario: number | null;
  CodigoAssociacao: number;
  Email: string | null;
  Telefone1: string | null;
  Telefone2: string | null;
  Ativo: boolean;
}

export interface IReferBody {
  Indicacao: {
    CodigoAssociacao: string;
    DataCriacao: string;
    CpfAssociado: string;
    EmailAssociado: string;
    NomeAssociado: string;
    TelefoneAssociado: string;
    PlacaVeiculoAssociado: string;
    NomeAmigo: string;
    TelefoneAmigo: string;
    EmailAmigo: string;
  };
  Remetente: string;
  Copias: [];
}

export type IGarageDetailsProps = {
  params: {
    item: IGarageItem;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: NavigatorScreenParams;
      QueryGarages: NavigatorScreenParams;
      GarageDetails: {
        item: IGarageItem;
      };
      ReferFriend: NavigatorScreenParams;
    }
  }
}

export {};

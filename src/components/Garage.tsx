import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { IGarageItem } from "../../global";

interface IProps {
  name: string | null;
  active: boolean;
  item: IGarageItem;
}

const Garage: React.FC<IProps> = ({ name, active, item }) => {
  const navigation = useNavigation();
  return (
    <Container
      onPress={() => navigation.navigate("GarageDetails", { item: item })}
    >
      <Title numberOfLines={1}>{name}</Title>
      <Row>
        <Active style={{ backgroundColor: active ? "#0BE783" : "#FE4C4C" }}>
          <ActiveText>{active ? "Ativo" : "Inativo"}</ActiveText>
        </Active>
        <AntDesign
          style={{ marginLeft: 12 }}
          name="arrowright"
          size={28}
          color="black"
        />
      </Row>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  margin: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
  border: 2px solid #000;
  height: 64px;
  border-radius: 16px;
  padding: 16px;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: #000;
  font-size: 16px;
  font-family: "Inter_700Bold";
  width: 160px;
`;

const Active = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 64px;
  height: 24px;
  background-color: #fff;
`;

const ActiveText = styled.Text`
  color: #000;
  font-size: 12px;
  font-family: "Inter_700Bold";
`;

export default Garage;

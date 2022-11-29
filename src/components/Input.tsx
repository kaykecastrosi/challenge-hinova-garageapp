import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";
import { Controller } from "react-hook-form";

interface IProps {
  name: string | null;
  placeholder: string | undefined;
  control: any;
  identifier: string;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

const Garage: React.FC<IProps> = ({
  name,
  placeholder,
  control,
  identifier,
  error,
}) => {
  const navigation = useNavigation();
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Container>
          <Title numberOfLines={1}>{name}</Title>
          <InputBox style={{ borderColor: error ? "#FE4C4C" : "#000" }}>
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder={placeholder}
            />
          </InputBox>
          <Error numberOfLines={1}>{error?.message as string}</Error>
        </Container>
      )}
      name={identifier}
    />
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  margin: 18px;
`;

const InputBox = styled.View`
  display: flex;
  margin: 8px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  border: 2px solid #000;
  height: 48px;
  border-radius: 16px;
  padding: 16px;
`;

const TextInput = styled.TextInput`
  display: flex;
  width: 100%;
  height: 32px;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: #000;
  font-size: 12px;
  font-family: "Inter_700Bold";
  width: 100%;
`;

const Error = styled.Text`
  color: #fe4c4c;
  font-size: 10px;
  font-family: "Inter_400Regular";
  width: 100%;
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

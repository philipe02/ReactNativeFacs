import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ListaUsuario from "../components/ListaUsuarios";
import users from "../data/users";
import { Button, Icon } from "react-native-elements";
import { styles } from "../style/style";
import TelaCadastroUsuario from "../components/FormUsuario";

const Stack = createStackNavigator();

export const ValidarUsuario = (loginUser, navigation) => {
  if (
    users.find((value, index) => {
      if (loginUser.email === value.email) {
        if (loginUser.password === users[index].password)
          navigation.navigate("Feed");
        else console.warn("senha errada");
      }
    }) === undefined
  )
    console.warn("email não registrado");
};
export const CadastrarUsuario = (user) => {
  return true;
};
const Usuario = () => {
  return (
    <Stack.Navigator initialRouteName="ListaUsuario">
      <Stack.Screen name="Lista Usuário" component={ListaUsuario} />
      <Stack.Screen name="Cadastro Usuário" component={TelaCadastroUsuario} />
    </Stack.Navigator>
  );
};

export default Usuario;

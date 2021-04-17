import React, { useContext, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListaUsuario from "../components/ListaUsuarios";
import UsersContext from "../context/UsersContext";
import FormUsuario from "../components/FormUsuario";

const Stack = createStackNavigator();

export const ValidarUsuario = (loginUser, navigation) => {
  if (
    state.users.find((value, index) => {
      if (loginUser.email === value.email) {
        if (loginUser.password === state.users[index].password)
          navigation.navigate("Feed");
        else console.warn("senha errada");
      }
    }) === undefined
  )
    console.warn("email não registrado");
};

function Usuario() {
  const { state, dispatch } = useContext(UsersContext);
  return (
    <Stack.Navigator
      initialRouteName="ListaUsuario"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Lista Usuário" component={ListaUsuario} />
      <Stack.Screen name="Detalhe Usuário" component={FormUsuario} />
      {/*<Stack.Screen name="Cadastro Usuário" component={TelaCadastroUsuario} />*/}
    </Stack.Navigator>
  );
}

export default Usuario;

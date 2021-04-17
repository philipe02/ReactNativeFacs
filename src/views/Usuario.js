import React, { useContext, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListaUsuario from "../components/ListaUsuarios";
//import users from "../data/users";
import TelaCadastroUsuario from "../components/FormUsuario";
import UsersContext, {
  atualizarUsuarios,
  getListaUsuarios,
  UsersProvider,
} from "../context/UsersContext";
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
export const CadastrarUsuario = (usuarioNovo) => {
  let listaUsuarios = getListaUsuarios();
  try {
    let keyNovoUsuario = listaUsuarios[listaUsuarios.length - 1].key + 1;
    usuarioNovo = { key: keyNovoUsuario, ...usuarioNovo };
    atualizarUsuarios(...listaUsuarios, usuarioNovo);
  } catch {
    usuarioNovo = { key: 1, ...usuarioNovo };
    atualizarUsuarios(...listaUsuarios, usuarioNovo);
  }
};
export const EditarUsuario = (usuarioEditado) => {
  let listaUsuarios = getListaUsuarios();
  listaUsuarios.map((user, index) =>
    user.key == usuarioEditado.key
      ? (listaUsuarios[index] = usuarioEditado)
      : null
  );
  atualizarUsuarios(listaUsuarios);
};
export const ExcluirUsuario = (usuarioDeletar) => {
  let listaUsuarios = getListaUsuarios();
  listaUsuarios = listaUsuarios.filter(
    (user) => user.key !== usuarioDeletar.key
  );
  atualizarUsuarios(listaUsuarios);
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

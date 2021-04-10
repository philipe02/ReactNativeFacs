import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FormUsuario from "../components/FormUsuario";
import ListaUsuario from "../components/ListaUsuarios";
import users from "../data/users";
import { Button, Icon } from "react-native-elements";
import { styles } from "../style/style";

const Stack = createStackNavigator();

export const ValidarUsuario = (loginUser, navigation) => {
  users.find((value, index) => {
    if (loginUser.email === value.email) {
      if (loginUser.password === users[index].password)
        navigation.navigate("Feed");
      else console.warn("senha errada");
    }
  });
};

const Usuario = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="ListaUsuario">
      <Stack.Screen name="ListaUsuario" component={ListaUsuario} />
      <Stack.Screen name="Usuario" component={FormUsuario} />
    </Stack.Navigator>
  );
};

export default Usuario;

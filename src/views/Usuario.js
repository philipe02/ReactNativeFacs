import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FormUsuario from "../components/FormUsuario";
import ListaUsuario from "../components/ListaUsuarios";
import { Button, Icon } from "react-native-elements";
import { styles } from "../style/style";

const Stack = createStackNavigator();

const Usuario = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="ListaUsuario"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ListaUsuario" component={ListaUsuario} />
      <Stack.Screen name="Usuario" component={FormUsuario} />
    </Stack.Navigator>
  );
};

export default Usuario;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CadastroUsuario from "./src/components/CadastroUsuario";
import Login from "./src/components/Login";
import { UsersProvider } from "./src/context/UsersContext";
import Menu from "./src/views/Menu";
import Perfil from "./src/components/Perfil";

const Stack = createStackNavigator();

export default function App({ navigation }) {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Criar Usuário" component={CadastroUsuario} />
          <Stack.Screen
            name="Usuário"
            initialParams={{ params: navigation }}
            component={Perfil}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}

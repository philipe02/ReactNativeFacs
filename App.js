import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CadastroUsuario from "./src/components/CadastroUsuario";
import Login from "./src/components/Login";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import Menu from "./src/views/Menu";
import Usuario from "./src/components/Usuario";

const Stack = createStackNavigator();

export default function App({ navigation }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Criar Usuário" component={CadastroUsuario} />
            <Stack.Screen name="Usuário" component={Usuario} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

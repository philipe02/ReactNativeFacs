import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CadastroUsuario from "./src/views/CadastroUsuario";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Login from "./src/views/Login";
import Menu from "./src/views/Menu";
import Usuario from "./src/views/Usuario";

const Stack = createStackNavigator();

export default function App({ navigation }) {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Menu" component={Menu} />
                    <Stack.Screen
                        name="Criar Usuário"
                        component={CadastroUsuario}
                    />
                    <Stack.Screen name="Usuário" component={Usuario} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer  } from "@react-navigation/native";

import Login           from "./src/views/Login";
import Menu            from "./src/views/Menu";
import Usuario         from "./src/views/Usuario";
import CadastroUsuario from "./src/views/CadastroUsuario";

import { ProviderMetodologia } from "./src/components/metodologias/ContextMetodologia";
import { ProviderComentario  } from "./src/components/comentarios/ContextComentario";

const Stack = createStackNavigator();

export default function App({ navigation }) {
  return (
          <ProviderMetodologia>
              <ProviderComentario>
                  <NavigationContainer>
                      <Stack.Navigator
                              initialRouteName="Login"
                              screenOptions={{ headerShown: false }}
                      >
                          <Stack.Screen name="Login"         component={ Login           }/>
                          <Stack.Screen name="Menu"          component={ Menu            }/>
                          <Stack.Screen name="Criar Usuário" component={ CadastroUsuario }/>
                          <Stack.Screen name="Usuário"       component={ Usuario         }/>
                      </Stack.Navigator>
                  </NavigationContainer>
              </ProviderComentario>
          </ProviderMetodologia>
  );
}

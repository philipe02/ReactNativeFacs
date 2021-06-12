import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer  } from "@react-navigation/native";

import Login           from "./src/views/Login";
import Menu            from "./src/views/Menu";
import Usuario         from "./src/views/Usuario";
import CadastroUsuario from "./src/views/CadastroUsuario";

import { ProviderMetodologia } from "./src/components/metodologias/ContextMetodologia";
import { ProviderComentario  } from "./src/components/comentarios/ContextComentario";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { IdeiaProvider } from "./src/components/Ideias/IdeiaContext";

const Stack = createStackNavigator();

export default function App({ navigation }) {
  return (
          <Provider store={store}>
              <IdeiaProvider>
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
              </IdeiaProvider>
          </Provider>
  );
}

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { styles } from "./src/style/style";
import Ideias from "./src/views/Ideias";
import Usuario, { ValidarUsuario } from "./src/views/Usuario";
import Feed from "./src/views/Feed";
import TelaCadastroUsuario from "./src/components/CadastroUsuario";
import { UsersProvider } from "./src/context/UsersContext";

const Drawer = createDrawerNavigator();

const Login = ({ navigation }) => {
  const [user, setUser] = useState({});
  return (
    <>
      <ImageBackground
        source={require("./src/images/fundo1.png")}
        style={styles.bgImage}
      >
        <View style={styles.login}>
          <Image
            source={require("./src/images/logo1.1.png")}
            style={styles.loginLogo}
          />
          <Input
            placeholder={"Digite seu email"}
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            errorStyle={{ height: 0 }}
            onChangeText={(email) => setUser({ ...user, email })}
          />
          <Input
            placeholder={"Digite sua senha"}
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            errorStyle={{ height: 0 }}
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
          />
          <Button
            title={"ACESSAR"}
            buttonStyle={styles.loginBtn}
            containerStyle={styles.loginBtnContainer}
            onPress={() => ValidarUsuario(user, navigation)}
          />
          <Button
            title={"Cadastre-se"}
            type="clear"
            titleStyle={styles.registerBtn}
            containerStyle={styles.registerBtnContainer}
            onPress={() => navigation.navigate("Criar Usuário", { navigation })}
          />
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </>
  );
};

export default function App() {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Ideias" component={Ideias} />
          <Drawer.Screen name="Usuários" component={Usuario} />
          <Drawer.Screen name="Feed" component={Feed} />
          <Drawer.Screen name="Criar Usuário" component={TelaCadastroUsuario} />
        </Drawer.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}

import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { ScrollView, View, ImageBackground, Image, Alert } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import UsersContext from "../context/UsersContext";
import { styles } from "../style/style";

const Login = ({ navigation }) => {
  const { dispatch, state } = useContext(UsersContext);
  const [user, setUser] = useState({});

  const handleLogin = () => {
    const usuarioEncontrado = state.usuarios.find(
      (value) => user.email === value.email && user.password === value.password
    );
    if (usuarioEncontrado !== undefined) {
      dispatch({ type: "validado", payload: usuarioEncontrado });
      navigation.navigate("Menu");
    } else Alert.alert("Usuário ou senha incorretos");
  };
  return (
    <ScrollView>
      <ImageBackground
        source={require("../images/fundo1.png")}
        style={styles.bgImage}
      >
        <View style={styles.login}>
          <Image
            source={require("../images/logo1.1.png")}
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
            onPress={handleLogin}
          />
          <Button
            title={"Cadastre-se"}
            type="clear"
            titleStyle={styles.registerBtn}
            containerStyle={styles.registerBtnContainer}
            onPress={() => navigation.navigate("Criar Usuário")}
          />
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </ScrollView>
  );
};

export default Login;

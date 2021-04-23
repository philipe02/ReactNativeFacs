import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, View, ImageBackground, Image, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { logar } from "../redux/actions";
import { styles } from "../style/style";

const Login = ({ navigation }) => {
  const { usuarioAtual, usuarios } = useSelector(
    (state) => state.UsuarioReducer
  );
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const logarUsuario = (usuario) => dispatch(logar(usuario));

  const handleLogin = () => {
    const usuarioEncontrado = usuarios.find(
      (value) => user.email === value.email && user.password === value.password
    );
    if (usuarioEncontrado !== undefined) {
      logarUsuario(usuarioEncontrado);
      setUser({});
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
            onPress={() => {
              setUser({});
              navigation.navigate("Criar Usuário");
            }}
          />
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </ScrollView>
  );
};

export default Login;

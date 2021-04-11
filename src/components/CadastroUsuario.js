import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, ImageBackground, Alert } from "react-native";
import { Input, Button, Header } from "react-native-elements";
import { styles } from "../style/style";
import { CadastrarUsuario } from "../views/Usuario";

const TelaCadastroUsuario = ({ navigation, route }) => {
  const [user, setUser] = useState({});
  const drawerNavigation = route.params;
  return (
    <>
      <ImageBackground
        source={require("../images/fundo1.png")}
        style={styles.bgImage}
      >
        <View style={styles.form}>
          <Text style={styles.formText}>Email</Text>
          <Input
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            onChangeText={(email) => setUser({ ...user, email })}
            placeholder="Digite seu email"
            value={user.email}
          />
          <Text style={styles.formText}>Senha</Text>
          <Input
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
            placeholder="Digite sua senha"
            value={user.password}
          />
          <Text style={styles.formText}>Confirmar senha</Text>
          <Input
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            secureTextEntry={true}
            onChangeText={(confirmPassword) =>
              setUser({ ...user, confirmPassword })
            }
            placeholder="Confirme sua senha"
            value={user.confirmPassword}
          />
          <Button
            buttonStyle={styles.loginBtn}
            containerStyle={styles.loginBtnContainer}
            title="Cadastrar"
            onPress={() => {
              if (CadastrarUsuario(user)) {
                setUser({});
                Alert.alert("Usuário registrado!");
                navigation.goBack();
              }
            }}
          />
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </>
  );
};

export default TelaCadastroUsuario;

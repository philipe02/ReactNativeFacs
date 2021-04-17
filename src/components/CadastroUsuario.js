import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { View, Text, ImageBackground, Alert } from "react-native";
import { Input, Button, Header } from "react-native-elements";
import UsersContext, { UsersProvider } from "../context/UsersContext";
import { styles } from "../style/style";

const TelaCadastroUsuario = ({ navigation }) => {
  const [user, setUser] = useState({});
  const { dispatch } = useContext(UsersContext);

  const handleCadastro = () => {
    if (!user.name || user.name === "") {
      Alert.alert("Nome obrigatório");
    } else if (!user.email || user.email === "") {
      Alert.alert("E-mail obrigatório");
    } else if (user.name && user.name != "" && user.email && user.email != "") {
      dispatch({ type: "cadastrar", payload: user });
      setUser({});
      Alert.alert("Usuário registrado!");
      navigation.goBack();
    }
  };
  return (
    <UsersProvider>
      <ImageBackground
        source={require("../images/fundo1.png")}
        style={styles.bgImage}
      >
        <View style={styles.form}>
          <Text style={styles.formText}>Nome</Text>
          <Input
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            onChangeText={(name) => setUser({ ...user, name })}
            placeholder="Digite seu nome"
            value={user.name}
          />
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
            onPress={handleCadastro}
          />
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </UsersProvider>
  );
};

export default TelaCadastroUsuario;

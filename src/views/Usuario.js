import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView, View, Text, ImageBackground, Alert } from "react-native";
import { Input, Button, Header, Icon } from "react-native-elements";
import { styles } from "../style/style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { salveUsuarios } from "../storage/storage";

const Usuario = ({ navigation, route }) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  const [usuarios, setUsuarios] = useState();
  const [mostraSenha, setMostraSenha] = useState(false);

  const editarUsuario = (usuarioEditado) => {
    let listaUsuarios = usuarios;
    listaUsuarios = listaUsuarios.map((user) =>
      user.key === usuarioEditado.key ? usuarioEditado : user
    );
    setUsuarios(listaUsuarios);
  };

  const mostrarSenha = () => {
    setMostraSenha(!mostraSenha);
  };

  const handleEditar = () => {
    editarUsuario(user);
    route.params ? navigation.goBack() : Alert.alert("Usuário editado");
  };

  useFocusEffect(
    useCallback(() => {
      async function carregaUsuarios() {
        const usuariosStorage = await AsyncStorage.getItem("@usuarios");
        if (usuariosStorage) {
          setUsuarios(JSON.parse(usuariosStorage));
        }
      }
      carregaUsuarios();
    }, [])
  );
  useEffect(() => {
    usuarios !== undefined ? salveUsuarios(usuarios) : null;
  }, [usuarios]);

  return (
    <ScrollView>
      <ImageBackground
        source={require("../images/fundo1.png")}
        style={styles.bgImage}
      >
        <Header
          containerStyle={styles.headerContainer}
          leftComponent={
            <Icon
              name={route.params ? "arrow-left" : "menu"}
              type="entypo"
              color="#D16E0B"
              onPress={() =>
                route.params ? navigation.goBack() : navigation.openDrawer()
              }
              size={40}
            />
          }
          centerComponent={{
            text: "Tela de usuário",
            style: styles.headerText,
          }}
          rightComponent={{
            icon: "home",
            color: "#D16E0B",
            size: 40,
            onPress: () => navigation.navigate("Feed"),
          }}
        />
        <View style={styles.form}>
          <Text style={styles.formText}>Nome</Text>
          <Input
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            errorStyle={{ height: 0 }}
            onChangeText={(name) => setUser({ ...user, name })}
            placeholder="Digite seu nome"
            value={user.name}
          />
          <Text style={styles.formText}>Email</Text>
          <Input
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            errorStyle={{ height: 0 }}
            onChangeText={(email) => setUser({ ...user, email })}
            placeholder="Digite seu email"
            value={user.email}
          />
          <Text style={styles.formText}>Senha</Text>
          <Input
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            errorStyle={{ height: 0 }}
            onChangeText={(password) => setUser({ ...user, password })}
            placeholder="Digite sua senha"
            value={user.password}
            secureTextEntry={!mostraSenha}
            rightIcon={
              <Icon
                type="antdesign"
                name={mostraSenha ? "eye" : "eyeo"}
                onPress={mostrarSenha}
              />
            }
            rightIconContainerStyle={styles.mostraSenhaBtn}
          />
          <Button
            containerStyle={styles.formBack}
            buttonStyle={styles.formBackBtn}
            title="Voltar"
            onPress={() => navigation.goBack()}
          />
          <Button
            containerStyle={styles.formSave}
            buttonStyle={styles.formSaveBtn}
            title="Salvar"
            onPress={handleEditar}
          />
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </ScrollView>
  );
};

export default Usuario;

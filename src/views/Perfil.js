import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, useEffect, useCallback } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  Alert,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input, Button, Header, Icon, ListItem } from "react-native-elements";
import { styles } from "../style/style";
import { useFocusEffect } from "@react-navigation/core";
import { salveUsuarioAtual, salveUsuarios } from "../storage/storage";

const Perfil = ({ navigation, route }) => {
  const [user, setUser] = useState({});
  const [usuarios, setUsuarios] = useState();
  const [ideias, setIdeias] = useState([]);
  const [mostraSenha, setMostraSenha] = useState(false);

  const editarUsuario = (usuarioEditado) => {
    let listaUsuarios = usuarios;
    listaUsuarios = listaUsuarios.map((user) =>
      user.key === usuarioEditado.key ? usuarioEditado : user
    );
    setUsuarios(listaUsuarios);
    salveUsuarioAtual(user);
  };

  const handleEditar = () => {
    editarUsuario(user);
    route.params ? navigation.goBack() : Alert.alert("Usuário editado");
  };

  const mostrarSenha = () => {
    setMostraSenha(!mostraSenha);
  };

  useFocusEffect(
    useCallback(() => {
      async function carregaIdeias() {
        const ideiaStorage = await AsyncStorage.getItem("@idea");
        if (ideiaStorage) {
          setIdeias(JSON.parse(ideiaStorage));
        }
      }
      async function carregaUsuarios() {
        const usuariosStorage = await AsyncStorage.getItem("@usuarios");
        if (usuariosStorage) {
          setUsuarios(JSON.parse(usuariosStorage));
        }
      }
      async function carregaUsuarioAtual() {
        const usuarioAtualStorage = await AsyncStorage.getItem("@usuarioAtual");
        if (usuarioAtualStorage) {
          setUser(JSON.parse(usuarioAtualStorage));
        }
      }
      carregaUsuarios();
      carregaUsuarioAtual();
      carregaIdeias();
    }, [])
  );
  useEffect(() => {
    usuarios !== undefined ? salveUsuarios(usuarios) : null;
  }, [usuarios]);

  const itemIdeias = (ideia) => {
    return (
      <ListItem
        key={ideia.id}
        bottomDivider
        containerStyle={styles.listItemContainer}
      >
        <ListItem.Content>
          <ListItem.Title style={styles.listItemTitulo}>
            {ideia.titulo}
          </ListItem.Title>
          <ListItem.Subtitle style={styles.listItemSubtitulo}>
            {ideia.desc}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <>
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
        <ScrollView>
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
              errorStyle={{ height: 0 }}
              inputContainerStyle={{ borderBottomWidth: 0 }}
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
          <View style={{ ...styles.listContainer, paddingBottom: 30 }}>
            <Text style={styles.secaoTitulo}>Ideias</Text>
            {ideias
              .filter((ideia) => ideia.userKey === user.key)
              .map((ideia) => itemIdeias(ideia))}
          </View>
        </ScrollView>
      </ImageBackground>
      <StatusBar style="light" />
    </>
  );
};

export default Perfil;

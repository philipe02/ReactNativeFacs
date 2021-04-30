import { StatusBar } from "expo-status-bar";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { ImageBackground, FlatList, Alert, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Header, ListItem, Button, Icon } from "react-native-elements";
import { styles } from "../style/style";
import { salveUsuarios } from "../storage/storage";
import { useFocusEffect } from "@react-navigation/core";

const ListaUsuario = ({ navigation }) => {
  const [usuarios, setUsuarios] = useState();
  const [usuarioAtual, setUsuarioAtual] = useState({});

  const excluirUsuario = (usuarioDeletar) => {
    let listaUsuarios = usuarios;
    listaUsuarios = listaUsuarios.filter(
      (user) => user.id !== usuarioDeletar.id
    );
    setUsuarios(listaUsuarios);
  };

  useFocusEffect(
    useCallback(() => {
      async function carregaUsuarios() {
        const usuariosStorage = await AsyncStorage.getItem("@usuarios");
        if (usuariosStorage) {
          setUsuarios(JSON.parse(usuariosStorage));
        }
      }
      async function carregaUsuarioAtual() {
        const usuarioAtualStorage = await AsyncStorage.getItem("@usuarioAtual");
        if (usuarioAtualStorage) {
          setUsuarioAtual(JSON.parse(usuarioAtualStorage));
        }
      }
      carregaUsuarioAtual();
      carregaUsuarios();
    }, [])
  );

  useEffect(() => {
    usuarios !== undefined ? salveUsuarios(usuarios) : null;
  }, [usuarios]);

  const confirmUserDeletion = (user) => {
    Alert.alert("Excluir usuário", "Deseja excluir o usuário?", [
      {
        text: "Sim",
        onPress() {
          excluirUsuario(user);
        },
      },
      { text: "Não" },
    ]);
  };

  const getActions = (usuario) => {
    return (
      <>
        <Button
          onPress={() => navigation.navigate("Usuário", usuario)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => confirmUserDeletion(usuario)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  };

  const itemUsuario = ({ item: usuario }) => {
    return (
      <ListItem
        key={usuario.id}
        bottomDivider
        containerStyle={styles.listItemContainer}
        onPress={() => {
          usuario.id === usuarioAtual.id
            ? navigation.navigate("Perfil", usuario)
            : navigation.navigate("Usuário", usuario);
        }}
      >
        <ListItem.Content>
          <ListItem.Title style={styles.listItemTitulo}>
            {usuario.name}
          </ListItem.Title>
          <ListItem.Subtitle style={styles.listItemSubtitulo}>
            {usuario.email}
          </ListItem.Subtitle>
        </ListItem.Content>
        {getActions(usuario)}
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
          leftComponent={{
            size: 35,
            icon: "menu",
            color: "#D16E0B",
            onPress: navigation.openDrawer,
          }}
          centerComponent={{
            text: "Lista de usuários",
            style: styles.headerText,
          }}
          rightComponent={{
            size: 35,
            icon: "home",
            color: "#D16E0B",
            onPress: () => navigation.navigate("Feed"),
          }}
        />
        <View style={styles.listContainer}>
          {usuarios !== undefined ? (
            <FlatList
              keyExtractor={(user) => user.id.toString()}
              data={usuarios}
              renderItem={itemUsuario}
            />
          ) : null}
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </>
  );
};

export default ListaUsuario;

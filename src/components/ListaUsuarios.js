import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { View, Text, ImageBackground, FlatList, Alert } from "react-native";
import { Header, ListItem, Button, Icon } from "react-native-elements";
import UsersContext from "../context/UsersContext";
import { styles } from "../style/style";

const ListaUsuario = ({ navigation }) => {
  const { state, dispatch } = useContext(UsersContext);

  const confirmUserDeletion = (user) => {
    Alert.alert("Excluir usuário", "Deseja excluir o usuário?", [
      {
        text: "Sim",
        onPress() {
          dispatch({ type: "excluir", payload: user });
        },
      },
      { text: "Não" },
    ]);
  };

  const getActions = (usuario) => {
    return (
      <>
        <Button
          onPress={() =>
            navigation.navigate("Detalhe Usuário", { navigation, usuario })
          }
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
        key={usuario.key}
        bottomDivider
        onPress={() => {
          navigation.navigate("Detalhe Usuário", { navigation, usuario });
        }}
      >
        <ListItem.Content>
          <ListItem.Title style={{ fontSize: 20 }}>
            {usuario.name}
          </ListItem.Title>
          <ListItem.Subtitle style={{ fontSize: 15 }}>
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
            icon: "menu",
            color: "#D16E0B",
            onPress: navigation.openDrawer,
            size: 40,
          }}
          centerComponent={{
            text: "Lista de usuários",
            style: styles.headerText,
          }}
          rightComponent={{
            icon: "home",
            color: "#D16E0B",
            size: 40,
            onPress: () => navigation.navigate("Login"),
          }}
        />
        <View style={styles.form}></View>
        <FlatList
          keyExtractor={(user) => user.key.toString()}
          data={state.usuarios}
          renderItem={itemUsuario}
        />
      </ImageBackground>
      <StatusBar style="light" />
    </>
  );
};

export default ListaUsuario;

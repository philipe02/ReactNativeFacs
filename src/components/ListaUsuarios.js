import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Header } from "react-native-elements";
import { styles } from "../style/style";

const ListaUsuario = ({ navigation }) => {
  return (
    <>
      <ImageBackground
        source={require("../images/fundo1.png")}
        style={styles.bgImage}
      >
        <Header
          containerStyle={{
            height: 80,
            backgroundColor: "#1281AB",
            borderBottomColor: "#1281AB",
          }}
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
      </ImageBackground>
      <StatusBar style="light" />
    </>
  );
};

export default ListaUsuario;

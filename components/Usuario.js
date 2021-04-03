import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import { Header } from "react-native-elements";
import { styles } from "../style/style";

const Usuario = ({ navigation }) => {
  return (
    <>
      <Header
        containerStyle={{ height: 80, backgroundColor: "gold" }}
        leftComponent={{
          icon: "menu",
          color: "#fff",
          onPress: navigation.openDrawer,
          size: 40,
        }}
        centerComponent={{
          text: "Tela de usuário",
          style: styles.headerText,
        }}
        rightComponent={{
          icon: "home",
          color: "#fff",
          size: 40,
          onPress: () => navigation.navigate("Inicio"),
        }}
      />
      <View style={styles.container}>
        <Text>Tela usuário</Text>
      </View>
      <StatusBar style="light" />
    </>
  );
};

export default Usuario;

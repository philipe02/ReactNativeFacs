import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import { Header } from "react-native-elements";
import { styles } from "../style/style";

const Ideias = ({ navigation }) => {
  return (
    <>
      <Header
        containerStyle={{ height: 80, backgroundColor: "tomato" }}
        leftComponent={{
          icon: "menu",
          color: "#fff",
          onPress: navigation.openDrawer,
          size: 40,
        }}
        centerComponent={{
          text: "Tela de ideias",
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
        <Text>Tela ideias</Text>
      </View>
      <StatusBar style="light" />
    </>
  );
};

export default Ideias;

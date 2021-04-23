import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { Header, Button } from "react-native-elements";
import ideias from "../data/ideias";
import { styles } from "../style/style";

const Ideias = ({ navigation }) => {
  return (
    <>
      <Header
        containerStyle={styles.headerContainer}
        leftComponent={{
          icon: "menu",
          color: "#D16E0B",
          onPress: navigation.openDrawer,
          size: 40,
        }}
        centerComponent={{
          text: "Tela de ideias",
          style: styles.headerText,
        }}
        rightComponent={{
          icon: "home",
          color: "#D16E0B",
          size: 40,
          onPress: () => navigation.navigate("Login"),
        }}
      />
      <View style={styles.body}>
        <ImageBackground
          source={require("../images/fundo1.png")}
          style={styles.bgImage}
        >
          <View style={styles.container}></View>
          <StatusBar style="light" />
        </ImageBackground>
      </View>
    </>
  );
};

export default Ideias;

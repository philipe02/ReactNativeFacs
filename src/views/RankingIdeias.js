import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, ImageBackground, FlatList } from "react-native";
import { Header, ListItem } from "react-native-elements";
import { styles } from "../style/style";

const Rancking = ({ navigation }) => {
  return (
    <>
      <Header
        containerStyle={{ height: 80, backgroundColor: "#1D1D1D" }}
        leftComponent={{
          icon: "menu",
          color: "#E37B09",
          onPress: navigation.openDrawer,
          size: 40,
        }}
        centerComponent={{
          text: " ⭐ Ranking Ideias ⭐",
          style: styles.headerText,
        }}
        rightComponent={{
          icon: "home",
          color: "#E37B09",
          size: 40,
          onPress: () => navigation.navigate("Inicio"),
        }}
      />
      <View style={styles.body}>
        <ImageBackground source={require('../images/fundo1.png')} style={styles.bgImage}>
          <View style={styles.container}>
            <Text>Tela feed</Text>
          </View>
          <StatusBar style="light" />
        </ImageBackground>
      </View>
    </>
  );
};

export default Rancking;

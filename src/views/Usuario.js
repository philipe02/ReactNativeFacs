import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Header } from "react-native-elements";
import { styles } from "../style/style";

const Usuario = ({ navigation }) => {
  return (
    <>
      <Header
        containerStyle={{ height: 80, backgroundColor: "#1D1D1D" }}
        leftComponent={{
          icon: "menu",
          color: "#D16E0B",
          onPress: navigation.openDrawer,
          size: 40,
        }}
        centerComponent={{
          text: "Tela de usuário",
          style: styles.headerText,
        }}
        rightComponent={{
          icon: "home",
          color: "#D16E0B",
          size: 40,
          onPress: () => navigation.navigate("Inicio"),
        }}
      />
      <View style={ styles.body }>
        <ImageBackground source={ require('../images/fundo1.png') } style={ styles.bg }>
          <View style={ styles.containerFeed }>

              <View style={{ alignItems: 'center' }}>
                  <Text style={ styles.title }>Tela de usuário</Text>
              </View>

          </View>
          <StatusBar style="light" />
        </ImageBackground>
      </View>
    </>
  );
};

export default Usuario;

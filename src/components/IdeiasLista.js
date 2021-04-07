import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "../style/style";

const Ideias = ({ navigation }) => {
    return (
        <View style={styles.body}>
          <ImageBackground source={require('../images/fundo1.png')} style={styles.bgImage}>
            <View style={styles.container}>
              <Text>Lista de Ideias</Text>
            </View>
            <StatusBar style="light" />
          </ImageBackground>
        </View>
    );
};
  
  export default Ideias;
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Header } from "react-native-elements";
import { styles } from "../style/style";

const Ideias = ({ navigation }) => {
    return (
        <>
          <View style={styles.body}>
            <ImageBackground source={require('../images/fundo1.png')} style={styles.bg}>
              <View style={styles.containerFeed}>

                  <View style={{ alignItems: 'center' }}>
                      <Text style={ styles.title }>Tela de ideias</Text>
                  </View>

              </View>
              <StatusBar style="light" />
            </ImageBackground>
          </View>
        </>
    );
};

export default Ideias;

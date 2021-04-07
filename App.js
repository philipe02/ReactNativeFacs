import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, ImageBackground } from "react-native";
import { Header } from "react-native-elements";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { styles } from "./src/style/style";
import Ideias from "./src/views/Ideias";
import Usuario from "./src/views/Usuario";
import Feed from "./src/views/Feed";

const Drawer = createDrawerNavigator();

const TelaInicial = ({ navigation }) => {
  return (
    <>
      <Header
        containerStyle={{ height: 80, backgroundColor: "#1281AB" }}
        leftComponent={{
          icon: "menu",
          color: "#D16E0B",
          onPress: navigation.openDrawer,
          size: 40,
        }}
        centerComponent={{
          text: "Tela inicial",
          style: styles.headerText,
        }}
        rightComponent={{
          icon: "home",
          color: "#D16E0B",
          size: 40,
          onPress: () => navigation.navigate("Inicio"),
        }}
      />
      <View style={styles.body}>
        <ImageBackground
          source={require("./src/images/fundo1.png")}
          style={styles.bgImage}
        >
          <View style={styles.container}>
            <Text>Tela inicial</Text>
          </View>
          <StatusBar style="light" />
        </ImageBackground>
      </View>
    </>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={TelaInicial} />
        <Drawer.Screen name="Ideias" component={Ideias} />
        <Drawer.Screen name="Usuários" component={Usuario} />
        <Drawer.Screen name="Feed" component={Feed} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

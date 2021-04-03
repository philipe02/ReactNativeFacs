import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { Header } from "react-native-elements";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { styles } from "./style/style";
import Ideias from "./components/Ideias";
import Usuario from "./components/Usuario";
import Feed from "./components/Feed";

const Drawer = createDrawerNavigator();

const TelaInicial = ({ navigation }) => {
  return (
    <>
      <Header
        containerStyle={{ height: 80 }}
        leftComponent={{
          icon: "menu",
          color: "#fff",
          onPress: navigation.openDrawer,
          size: 40,
        }}
        centerComponent={{
          text: "Tela inicial",
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
        <Text>Tela inicial</Text>
      </View>
      <StatusBar style="light" />
    </>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={TelaInicial} />
        <Drawer.Screen name="Ideias" component={Ideias} />
        <Drawer.Screen name="Usuario" component={Usuario} />
        <Drawer.Screen name="Feed" component={Feed} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

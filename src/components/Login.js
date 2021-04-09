import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { Input, Button } from "react-native-elements";
import { styles } from "../style/style";

const Login = ({ navigation }) => {
  return (
    <>
      <ImageBackground
        source={require("../images/fundo1.png")}
        style={styles.bgImage}
      >
        {/*   <Header
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
            onPress: () => navigation.navigate("Inicio"),
          }}
        /> */}
        <View style={styles.login}>
          <Image
            source={require("../images/logo1.1.png")}
            style={styles.loginLogo}
          />
          <Input
            placeholder={"Digite seu email"}
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            errorStyle={{ height: 0 }}
          />
          <Input
            placeholder={"Digite sua senha"}
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            errorStyle={{ height: 0 }}
          />
          <Button
            title={"ACESSAR"}
            buttonStyle={styles.loginBtn}
            containerStyle={styles.loginBtnContainer}
            onPress={() => navigation.navigate("Feed")}
          />
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </>
  );
};

export default Login;

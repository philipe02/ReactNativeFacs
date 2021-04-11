import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { Input, Button, Header } from "react-native-elements";
import { styles } from "../style/style";

const FormUsuario = ({ navigation, route }) => {
  const [user, setUser] = useState({});
  const drawerNavigation = route.params;
  return (
    <>
      <ImageBackground
        source={require("../images/fundo1.png")}
        style={styles.bgImage}
      >
        <Header
          containerStyle={{
            height: 80,
            backgroundColor: "#1281AB",
            borderBottomColor: "#1281AB",
          }}
          leftComponent={{
            icon: "menu",
            color: "#D16E0B",
            onPress: drawerNavigation.openDrawer,
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
            onPress: () => drawerNavigation.navigate("Login"),
          }}
        />
        <View style={styles.form}>
          <Text style={styles.formText}>Email</Text>
          <Input
            inputStyle={styles.formText}
            onChangeText={(email) => setUser({ ...user, email })}
            placeholder="Informe o email"
            value={user.email}
          />
          <Text style={styles.formText}>Senha</Text>
          <Input
            inputStyle={styles.formText}
            onChangeText={(password) => setUser({ ...user, password })}
            placeholder="Informe a senha"
            value={user.password}
          />
          <Button
            containerStyle={styles.formSave}
            buttonStyle={styles.formSaveBtn}
            title="Salvar"
            onPress={() => navigation.navigate("ListaUsuario")}
          />
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </>
  );
};

export default FormUsuario;

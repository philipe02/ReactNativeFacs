import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView, View, Text, ImageBackground, Alert } from "react-native";
import { Input, Button, Header, Icon } from "react-native-elements";
import { styles } from "../style/style";
import { useDispatch, useSelector } from "react-redux";
import { usuarioEditado } from "../redux/Actions/userActions";

const Usuario = ({ navigation, route }) => {
    const { usuarioAtual, usuarios } = useSelector(
        (state) => state.UsuarioReducer
    );
    const dispatch = useDispatch();

    let userKey = route.params.key;
    const [user, setUser] = useState(
        usuarios.find((user) => user.key === userKey)
    );

    const editarUsuario = (usuario) => dispatch(usuarioEditado(usuario));

    const handleEditar = () => {
        editarUsuario(user);
        userKey = user.key;

        route.params ? navigation.goBack() : Alert.alert("Usuário editado");
    };
    useFocusEffect(
        useCallback(() => {
            setUser(usuarios.find((user) => user.key === userKey));
        }, [userKey])
    );
    return (
        <ScrollView>
            <ImageBackground
                source={require("../images/fundo1.png")}
                style={styles.bgImage}
            >
                <Header
                    containerStyle={styles.headerContainer}
                    leftComponent={
                        <Icon
                            name={route.params ? "arrow-left" : "menu"}
                            type="entypo"
                            color="#D16E0B"
                            onPress={() =>
                                route.params
                                    ? navigation.goBack()
                                    : navigation.openDrawer()
                            }
                            size={40}
                        />
                    }
                    centerComponent={{
                        text: "Tela de usuário",
                        style: styles.headerText,
                    }}
                    rightComponent={{
                        icon: "home",
                        color: "#D16E0B",
                        size: 40,
                        onPress: () => navigation.navigate("Feed"),
                    }}
                />
                <View style={styles.form}>
                    <Text style={styles.formText}>Nome</Text>
                    <Input
                        inputStyle={styles.input}
                        containerStyle={styles.inputContainer}
                        errorStyle={{ height: 0 }}
                        onChangeText={(name) => setUser({ ...user, name })}
                        placeholder="Digite seu nome"
                        value={user.name}
                    />
                    <Text style={styles.formText}>Email</Text>
                    <Input
                        inputStyle={styles.input}
                        containerStyle={styles.inputContainer}
                        errorStyle={{ height: 0 }}
                        onChangeText={(email) => setUser({ ...user, email })}
                        placeholder="Digite seu email"
                        value={user.email}
                    />
                    <Text style={styles.formText}>Senha</Text>
                    <Input
                        inputStyle={styles.input}
                        containerStyle={styles.inputContainer}
                        errorStyle={{ height: 0 }}
                        onChangeText={(password) =>
                            setUser({ ...user, password })
                        }
                        placeholder="Digite sua senha"
                        value={user.password}
                    />
                    {route.params ? (
                        <Button
                            containerStyle={styles.formBack}
                            buttonStyle={styles.formBackBtn}
                            title="Voltar"
                            onPress={() => navigation.goBack()}
                        />
                    ) : null}
                    <Button
                        containerStyle={styles.formSave}
                        buttonStyle={styles.formSaveBtn}
                        title="Salvar"
                        onPress={handleEditar}
                    />
                </View>
            </ImageBackground>
            <StatusBar style="light" />
        </ScrollView>
    );
};

export default Usuario;

import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import { ScrollView, View, ImageBackground, Image, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input, Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { usuarioLogado } from "../redux/Actions/userActions";
import { salveUsuarioAtual } from "../storage/storage";
import { styles } from "../style/style";
import { useFocusEffect } from "@react-navigation/core";

const Login = ({ navigation }) => {
    const { usuarioAtual, usuarios } = useSelector(
        (state) => state.UsuarioReducer
    );
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const logarUsuario = (usuario) => dispatch(usuarioLogado(usuario));

    const handleLogin = () => {
        const usuarioEncontrado = usuarios.find(
            (value) =>
                user.email === value.email && user.password === value.password
        );
        if (usuarioEncontrado !== undefined) {
            logarUsuario(usuarioEncontrado);
            setUser({});
            navigation.navigate("Menu");
        } else Alert.alert("Usuário ou senha incorretos");
    };

    /* useFocusEffect(
        useCallback(() => {
            async function carregaUsuarios() {
                const usuariosStorage = await AsyncStorage.getItem("@usuarios");
                if (usuariosStorage) {
                    setUsuarios(JSON.parse(usuariosStorage));
                }
            }
            carregaUsuarios();
        }, [])
    ); */
    return (
        <ScrollView>
            <ImageBackground
                source={require("../images/fundo1.png")}
                style={styles.bgImage}
            >
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
                        onChangeText={(email) => setUser({ ...user, email })}
                        value={user.email}
                    />
                    <Input
                        placeholder={"Digite sua senha"}
                        inputStyle={styles.input}
                        containerStyle={styles.inputContainer}
                        errorStyle={{ height: 0 }}
                        secureTextEntry={true}
                        onChangeText={(password) =>
                            setUser({ ...user, password })
                        }
                        value={user.password}
                    />
                    <Button
                        title={"ACESSAR"}
                        buttonStyle={styles.loginBtn}
                        containerStyle={styles.loginBtnContainer}
                        onPress={handleLogin}
                    />
                    <Button
                        title={"Cadastre-se"}
                        type="clear"
                        titleStyle={styles.registerBtn}
                        containerStyle={styles.registerBtnContainer}
                        onPress={() => {
                            setUser({});
                            navigation.navigate("Criar Usuário");
                        }}
                    />
                </View>
            </ImageBackground>
            <StatusBar style="light" />
        </ScrollView>
    );
};
export default Login;

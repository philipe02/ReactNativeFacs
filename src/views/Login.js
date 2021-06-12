import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, View, ImageBackground, Image, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { logarUsuarioAction } from "../redux/actions/usuarioActions";
import { styles } from "../style/style";
import { carregarUsuariosAction } from "../redux/actions/usuarioActions";

const Login = ({ navigation }) => {
    const [user, setUser] = useState({});
    const { usuarioAtual, usuarios } = useSelector(
        (state) => state.UsuarioReducer
    );

    const dispatch = useDispatch();

    const logarUsuario = (usuario) => dispatch(logarUsuarioAction(usuario));

    const handleLogin = () => {
        const usuarioEncontrado = usuarios.find(
            (value) =>
                user.email === value.email && user.password === value.password
        );
        if (usuarioEncontrado !== undefined) {
            logarUsuario(usuarioEncontrado);
            setUser({});
            navigation.navigate("Menu");
        } else {
            Alert.alert("Usuário ou senha incorretos");
        }
    };

    const carregaUsuarios = () => dispatch(carregarUsuariosAction());
    useEffect(() => {
        carregaUsuarios();
    }, []);

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

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, View, Text, ImageBackground, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { usuarioCadastrado } from "../redux/Actions/userActions";
import { styles } from "../style/style";

const CadastroUsuario = ({ navigation }) => {
    const [user, setUser] = useState({});

    const dispatch = useDispatch();

    const cadastrarUsuario = (usuario) => dispatch(usuarioCadastrado(usuario));

    const handleCadastro = () => {
        if (!user.name || user.name === "") Alert.alert("Nome obrigatório");
        else if (!user.email || user.email === "")
            Alert.alert("E-mail obrigatório");
        else if (!user.password || user.password === "")
            Alert.alert("Senha obrigatória");
        else if (user.password !== user.confirmPassword)
            Alert.alert("Confirmação de senha diferente da senha");
        else if (
            user.name &&
            user.name !== "" &&
            user.email &&
            user.email !== "" &&
            user.password &&
            user.password !== ""
        ) {
            delete user.confirmPassword;
            cadastrarUsuario(user);
            setUser({});
            Alert.alert("Usuário registrado!");
            navigation.goBack();
        }
    };
    return (
        <>
            <ScrollView>
                <ImageBackground
                    source={require("../images/fundo1.png")}
                    style={styles.bgImage}
                >
                    <View style={styles.form}>
                        <Text style={styles.formText}>Nome</Text>
                        <Input
                            inputStyle={styles.input}
                            containerStyle={styles.inputContainer}
                            onChangeText={(name) => setUser({ ...user, name })}
                            placeholder="Digite seu nome"
                            value={user.name}
                        />
                        <Text style={styles.formText}>Email</Text>
                        <Input
                            inputStyle={styles.input}
                            containerStyle={styles.inputContainer}
                            onChangeText={(email) =>
                                setUser({ ...user, email })
                            }
                            placeholder="Digite seu email"
                            value={user.email}
                        />
                        <Text style={styles.formText}>Senha</Text>
                        <Input
                            inputStyle={styles.input}
                            containerStyle={styles.inputContainer}
                            secureTextEntry={true}
                            onChangeText={(password) =>
                                setUser({ ...user, password })
                            }
                            placeholder="Digite sua senha"
                            value={user.password}
                        />
                        <Text style={styles.formText}>Confirmar senha</Text>
                        <Input
                            inputStyle={styles.input}
                            containerStyle={styles.inputContainer}
                            secureTextEntry={true}
                            onChangeText={(confirmPassword) =>
                                setUser({ ...user, confirmPassword })
                            }
                            placeholder="Confirme sua senha"
                            value={user.confirmPassword}
                        />
                        <Button
                            buttonStyle={styles.loginBtn}
                            containerStyle={styles.loginBtnContainer}
                            title="Cadastrar"
                            onPress={handleCadastro}
                        />
                    </View>
                </ImageBackground>
            </ScrollView>
            <StatusBar style="light" />
        </>
    );
};

export default CadastroUsuario;

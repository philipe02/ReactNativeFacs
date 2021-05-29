import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, ImageBackground, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input, Button, CheckBox } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { usuarioCadastrado } from "../redux/Actions/userActions";
import { styles } from "../style/style";
import { Picker } from "@react-native-picker/picker";

const CadastroUsuario = ({ navigation }) => {
    const [user, setUser] = useState({});
    const [sexo, setSexo] = useState("");
    const dispatch = useDispatch();

    const cadastrarUsuario = (usuario) => dispatch(usuarioCadastrado(usuario));

    const preencherSexo = (sexoPressionado) => {
        if (sexo === "" || sexo !== sexoPressionado) {
            setSexo(sexoPressionado);
        }
    };

    const handleCadastro = () => {
        if (!user.name || user.name === "") Alert.alert("Nome obrigatório");
        else if (!user.email || user.email === "")
            Alert.alert("E-mail obrigatório");
        else if (!user.password || user.password === "")
            Alert.alert("Senha obrigatória");
        else if (user.password !== user.confirmPassword)
            Alert.alert("Confirmação de senha diferente da senha");
        else if (!user.sexo || user.sexo === "")
            Alert.alert("Selecione o sexo");
        else {
            delete user.confirmPassword;
            cadastrarUsuario(user);
            setUser({});
            Alert.alert("Usuário registrado!");
            navigation.navigate("Login");
        }
    };

    /* useEffect(() => {
    async function carregaUsuarios() {
      const usuariosStorage = await AsyncStorage.getItem("@usuarios");
      if (usuariosStorage) {
        setUsuarios(JSON.parse(usuariosStorage));
      }
    }
    carregaUsuarios();
  }, []); */

    useEffect(() => {
        setUser({ ...user, sexo: sexo });
    }, [sexo]);

    return (
        <>
            <ScrollView style={styles.scrollViewStyle}>
                <View style={styles.form}>
                    <Input
                        label="Nome"
                        labelStyle={styles.formLabelText}
                        inputStyle={styles.input}
                        containerStyle={styles.inputContainer}
                        onChangeText={(name) => setUser({ ...user, name })}
                        placeholder="Digite seu nome"
                        value={user.name}
                    />
                    <Input
                        label="Email"
                        labelStyle={styles.formLabelText}
                        inputStyle={styles.input}
                        containerStyle={styles.inputContainer}
                        onChangeText={(email) => setUser({ ...user, email })}
                        placeholder="Digite seu email"
                        value={user.email}
                    />
                    <Text style={styles.formText}>Sexo</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                        }}
                    >
                        <CheckBox
                            containerStyle={{
                                width: 100,
                                backgroundColor: "transparent",
                                borderColor: "transparent",
                            }}
                            textStyle={{ color: "#fff", fontSize: 25 }}
                            size={35}
                            onPress={() => {
                                preencherSexo("M");
                                setUser({ ...user, sexo: sexo });
                            }}
                            checked={sexo === "M"}
                            title="M"
                        />
                        <CheckBox
                            containerStyle={{
                                width: 100,
                                backgroundColor: "transparent",
                                borderColor: "transparent",
                            }}
                            textStyle={{ color: "#fff", fontSize: 25 }}
                            onPress={() => {
                                preencherSexo("F");
                            }}
                            checked={sexo === "F"}
                            size={35}
                            title="F"
                        />
                    </View>
                    <Text style={styles.formText}>Setor de atuação</Text>
                    <View style={styles.formPickerContainer}>
                        <Picker
                            selectedValue={user.setor}
                            onValueChange={(setor) =>
                                setUser({ ...user, setor })
                            }
                            style={styles.formPicker}
                        >
                            <Picker.Item
                                label="Selecione um setor"
                                value="setorPadrao"
                            />
                            <Picker.Item
                                label="Área de Pessoas"
                                value="pessoas"
                            />
                            <Picker.Item
                                label="Tecnologia da informação"
                                value="tinformação"
                            />
                            <Picker.Item
                                label="Gerência e gestão"
                                value="gestao"
                            />
                            <Picker.Item
                                label="Contabilidade"
                                value="contabilidade"
                            />
                        </Picker>
                    </View>
                    <Input
                        label="Senha"
                        labelStyle={styles.formLabelText}
                        inputStyle={styles.input}
                        containerStyle={styles.inputContainer}
                        secureTextEntry={true}
                        onChangeText={(password) =>
                            setUser({ ...user, password })
                        }
                        placeholder="Digite sua senha"
                        value={user.password}
                    />
                    <Input
                        label="Confirmar senha"
                        labelStyle={styles.formLabelText}
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
            </ScrollView>
            <ImageBackground
                source={require("../images/fundo1.png")}
                style={[styles.bgImage, styles.bgImageFixed]}
            />
            <StatusBar style="light" />
        </>
    );
};

export default CadastroUsuario;

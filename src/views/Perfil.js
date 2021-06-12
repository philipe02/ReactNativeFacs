import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext } from "react";
import { ScrollView, View, Text, ImageBackground, Alert } from "react-native";
import {
    Input,
    Button,
    Header,
    Icon,
    ListItem,
    CheckBox,
} from "react-native-elements";
import { styles } from "../style/style";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { editarUsuarioAction } from "../redux/actions/usuarioActions";
import IdeiaService from "../../services/IdeiaService";

const Perfil = ({ navigation, route }) => {
    const { usuarioAtual, usuarios } = useSelector(
        (state) => state.UsuarioReducer
    );
    const dispatch = useDispatch();
    const [user, setUser] = useState(usuarioAtual);
    const [mostraSenha, setMostraSenha] = useState(false);
    const [sexo, setSexo] = useState(usuarioAtual.sexo);
    const [ideias, setIdeias] = useState([]);

    const getData = () => {
        IdeiaService.getAll()
            .then((res) => {
                setIdeias(res.data);
            })
            .catch(console.log);
    };
    useEffect(getData, []);
    useEffect(() => {
        console.log(
            ideias.filter((ideia) => ideia.userId === usuarioAtual.id),
            usuarioAtual
        );
        getData();
    }, [ideias]);
    const editarUsuario = (usuario) => dispatch(editarUsuarioAction(usuario));

    const handleEditar = () => {
        editarUsuario(user);
        Alert.alert("Usuário editado");
    };

    const mostrarSenha = () => {
        setMostraSenha(!mostraSenha);
    };

    const preencherSexo = (sexoPressionado) => {
        if (sexo === "" || sexo !== sexoPressionado) {
            setSexo(sexoPressionado);
        }
    };

    useEffect(() => {
        setUser({ ...user, sexo: sexo });
    }, [sexo]);

    const itemIdeias = (ideia) => {
        return (
            <ListItem
                key={ideia.id}
                bottomDivider
                containerStyle={styles.listItemContainer}
            >
                <ListItem.Content>
                    <ListItem.Title style={styles.listItemTitulo}>
                        {ideia.titulo}
                    </ListItem.Title>
                    <ListItem.Subtitle style={styles.listItemSubtitulo}>
                        {ideia.desc}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <>
            <Header
                containerStyle={styles.headerContainer}
                leftComponent={{
                    size: 35,
                    icon: "menu",
                    color: "#D16E0B",
                    onPress: navigation.openDrawer,
                }}
                centerComponent={{
                    text: "Perfil",
                    style: styles.headerText,
                }}
                rightComponent={{
                    size: 35,
                    icon: "home",
                    color: "#D16E0B",
                    onPress: () => navigation.navigate("Feed"),
                }}
            />
            <View>
                <ImageBackground
                    source={require("../images/fundo1.png")}
                    style={[styles.bgImage, styles.bgImageFixed]}
                />
                <ScrollView style={styles.scrollViewStyle}>
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
                            onChangeText={(email) =>
                                setUser({ ...user, email })
                            }
                            placeholder="Digite seu email"
                            value={user.email}
                        />
                        <Text style={styles.formText}>Sexo</Text>
                        <View style={styles.sexoContainer}>
                            <CheckBox
                                containerStyle={styles.checkBoxContainer}
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
                                containerStyle={styles.checkBoxContainer}
                                textStyle={{ color: "#fff", fontSize: 25 }}
                                onPress={() => {
                                    preencherSexo("F");
                                }}
                                checked={sexo === "F"}
                                size={35}
                                title="F"
                            />
                            <CheckBox
                                containerStyle={styles.checkBoxContainer}
                                textStyle={{ color: "#fff", fontSize: 25 }}
                                onPress={() => {
                                    preencherSexo("O");
                                }}
                                checked={sexo === "O"}
                                size={35}
                                title="O"
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
                        <Text style={styles.formText}>Senha</Text>
                        <Input
                            inputStyle={styles.input}
                            containerStyle={styles.inputContainer}
                            errorStyle={{ height: 0 }}
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            onChangeText={(password) =>
                                setUser({ ...user, password })
                            }
                            placeholder="Digite sua senha"
                            value={user.password}
                            secureTextEntry={!mostraSenha}
                            rightIcon={
                                <Icon
                                    type="antdesign"
                                    name={mostraSenha ? "eye" : "eyeo"}
                                    onPress={mostrarSenha}
                                />
                            }
                            rightIconContainerStyle={styles.mostraSenhaBtn}
                        />
                    </View>
                    <View
                        style={{
                            ...styles.listContainer,
                            marginBottom: 30,
                        }}
                    >
                        <Text style={styles.secaoTitulo}>Ideias</Text>
                        {!ideias.filter((ideia) => ideia.userId == user.id)
                            .length ? (
                            <Text style={styles.semIdeiasText}>
                                Não há ideias para serem mostradas
                            </Text>
                        ) : (
                            ideias
                                .filter((ideia) => ideia.userId == user.id)
                                .map((ideia) => itemIdeias(ideia))
                        )}
                    </View>
                    <View
                        style={{
                            ...styles.formContainerBotoes,
                            marginBottom: 100,
                        }}
                    >
                        <Button
                            containerStyle={styles.formSave}
                            buttonStyle={styles.formSaveBtn}
                            title="Salvar"
                            onPress={handleEditar}
                        />
                        <Button
                            containerStyle={styles.formBack}
                            buttonStyle={styles.formBackBtn}
                            title="Voltar"
                            onPress={() => navigation.goBack()}
                        />
                    </View>
                </ScrollView>
            </View>
            <StatusBar style="light" />
        </>
    );
};

export default Perfil;

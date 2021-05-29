import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {
    ScrollView,
    View,
    Text,
    ImageBackground,
    Alert,
    FlatList,
} from "react-native";
import { Input, Button, Header, Icon, ListItem } from "react-native-elements";
import { styles } from "../style/style";
import ideias from "../data/ideias";
import { useDispatch, useSelector } from "react-redux";
import { usuarioEditado } from "../redux/Actions/userActions";

const Perfil = ({ navigation, route }) => {
    const { usuarioAtual, usuarios } = useSelector(
        (state) => state.UsuarioReducer
    );
    const dispatch = useDispatch();

    let userKey = usuarioAtual.key;
    const [user, setUser] = useState(
        usuarios.find((user) => user.key === userKey)
    );

    const editarUsuario = (usuario) => dispatch(usuarioEditado(usuario));
    const [mostraSenha, setMostraSenha] = useState(false);

    const handleEditar = () => {
        editarUsuario(user);
        userKey = user.key;

        route.params ? navigation.goBack() : Alert.alert("Usuário editado");
    };

    const mostrarSenha = () => {
        setMostraSenha(!mostraSenha);
    };

    const itemIdeias = ({ item: ideia }) => {
        return (
            <ListItem
                key={ideia.id}
                bottomDivider
                containerStyle={styles.listItemContainer}
                onPress={() => {
                    console.log("clicou");
                }}
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
                <ScrollView>
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
                        <Button
                            containerStyle={styles.formBack}
                            buttonStyle={styles.formBackBtn}
                            title="Voltar"
                            onPress={() => navigation.goBack()}
                        />
                        <Button
                            containerStyle={styles.formSave}
                            buttonStyle={styles.formSaveBtn}
                            title="Salvar"
                            onPress={handleEditar}
                        />
                    </View>
                    <View
                        style={{ ...styles.listContainer, paddingBottom: 30 }}
                    >
                        <Text style={styles.secaoTitulo}>Ideias</Text>
                        <FlatList
                            scrollEnabled={false}
                            keyExtractor={(ideia) => ideia.id.toString()}
                            data={ideias.filter(
                                (ideia) => usuarioAtual.key === ideia.userKey
                            )}
                            renderItem={itemIdeias}
                            contentContainerStyle={{ justifyContent: "center" }}
                        />
                    </View>
                </ScrollView>
            </ImageBackground>
            <StatusBar style="light" />
        </>
    );
};

export default Perfil;

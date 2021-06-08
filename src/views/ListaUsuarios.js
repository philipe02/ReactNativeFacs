import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ImageBackground, FlatList, Alert, View } from "react-native";

import { Header, ListItem, Button, Icon } from "react-native-elements";
import { styles } from "../style/style";
import {
    excluirUsuarioAction,
    carregarUsuariosAction,
} from "../redux/actions/usuarioActions";
import { useDispatch, useSelector } from "react-redux";

const ListaUsuario = ({ navigation }) => {
    const { usuarioAtual, usuarios } = useSelector(
        (state) => state.UsuarioReducer
    );
    const dispatch = useDispatch();

    const excluirUsuario = (usuario) => dispatch(excluirUsuarioAction(usuario));
    useEffect(() => carregarUsuariosAction, [usuarios]);

    /* useEffect(() => {
        usuarios !== undefined ? salveUsuarios(usuarios) : null;
    }, [usuarios]); */

    const confirmUserDeletion = (user) => {
        Alert.alert("Excluir usuário", "Deseja excluir o usuário?", [
            {
                text: "Sim",
                onPress() {
                    excluirUsuario(user);
                },
            },
            { text: "Não" },
        ]);
    };

    const getActions = (usuario) => {
        return (
            <>
                <Button
                    onPress={() => {
                        usuario.id === usuarioAtual.id
                            ? navigation.navigate("Perfil", usuario)
                            : navigation.navigate("Usuário", usuario);
                    }}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(usuario)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        );
    };

    const itemUsuario = ({ item: usuario }) => {
        return (
            <ListItem
                key={usuario.id}
                bottomDivider
                containerStyle={styles.listItemContainer}
                onPress={() => {
                    usuario.id === usuarioAtual.id
                        ? navigation.navigate("Perfil", usuario)
                        : navigation.navigate("Usuário", usuario);
                }}
            >
                <ListItem.Content>
                    <ListItem.Title style={styles.listItemTitulo}>
                        {usuario.name}
                    </ListItem.Title>
                    <ListItem.Subtitle style={styles.listItemSubtitulo}>
                        {usuario.email}
                    </ListItem.Subtitle>
                </ListItem.Content>
                {getActions(usuario)}
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
                    leftComponent={{
                        size: 35,
                        icon: "menu",
                        color: "#D16E0B",
                        onPress: navigation.openDrawer,
                    }}
                    centerComponent={{
                        text: "Lista de usuários",
                        style: styles.headerText,
                    }}
                    rightComponent={{
                        size: 35,
                        icon: "home",
                        color: "#D16E0B",
                        onPress: () => {
                            console.log(
                                usuarioAtual,
                                usuarios
                            ); /* navigation.navigate("Feed") */
                        },
                    }}
                />
                <View style={styles.listContainer}>
                    {usuarios !== undefined ? (
                        <FlatList
                            keyExtractor={(user) => user.id.toString()}
                            data={usuarios}
                            renderItem={itemUsuario}
                            style={{ marginBottom: 30, marginTop: 10 }}
                        />
                    ) : null}
                </View>
            </ImageBackground>
            <StatusBar style="light" />
        </>
    );
};

export default ListaUsuario;

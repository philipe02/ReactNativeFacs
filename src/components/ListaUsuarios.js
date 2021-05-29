import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { ImageBackground, FlatList, Alert, View } from "react-native";
import { Header, ListItem, Button, Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { usuarioExcluido } from "../redux/Actions/userActions";
import { styles } from "../style/style";

const ListaUsuario = ({ navigation }) => {
    const { usuarioAtual, usuarios } = useSelector(
        (state) => state.UsuarioReducer
    );
    const dispatch = useDispatch();

    const excluirUsuario = (usuario) => dispatch(usuarioExcluido(usuario));

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
                    onPress={() => navigation.navigate("Usuário", usuario)}
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
                key={usuario.key}
                bottomDivider
                containerStyle={styles.listItemContainer}
                onPress={() => {
                    usuario.key === usuarioAtual.key
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
                        onPress: () => navigation.navigate("Login"),
                    }}
                />
                <View style={styles.listContainer}>
                    <FlatList
                        keyExtractor={(user) => user.key.toString()}
                        data={usuarios}
                        renderItem={itemUsuario}
                    />
                </View>
            </ImageBackground>
            <StatusBar style="light" />
        </>
    );
};

export default ListaUsuario;

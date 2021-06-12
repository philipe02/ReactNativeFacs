import React, { useState, useEffect, useContext } from "react";

import {styles} from "../style/style";
import {StatusBar} from "expo-status-bar";
import {FontAwesome} from "@expo/vector-icons";
import { ListItem, Avatar, Header, Button, Icon } from "react-native-elements";
import { Text, View, FlatList, ImageBackground, TouchableOpacity, Modal, ScrollView } from "react-native";

import users from "./Users";

import ComentarioService     from "../../services/ComentarioService";
import AdicionarComentario   from "../components/comentarios/AdicionarComentario";
import EditarComentario      from "../components/comentarios/EditarComentario";
import DeletarComentario     from "../components/comentarios/DeletarComentario";
import { ContextComentario } from "../components/comentarios/ContextComentario";

const Feed = ({navigation}) => {

    const [modalVisible, setModalVisible]           = useState(false);
    const [isAddModalOpen, setIsAddModalOpen]       = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [comentario, setComentario] = useState([]);
    const [comentarios, setComentarios] = useContext(ContextComentario);

    const [errorMessage, setErrorMessage] = useState('');
    const [selectedCode, setSelectedCode] = useState(false);
    //const [selectedComentario, setSelectedComentario] = useState(false);
    const [selectedIdeiaClick, setSelectedIdeiaClick] = useState(false);

    const toogleListaComentario     = () => setModalVisible(!modalVisible);
    const toggleAdicionarComentario = () => setIsAddModalOpen(!isAddModalOpen);
    const toggleEditarComentario    = () => setIsUpdateModalOpen(!isUpdateModalOpen);
    const toggleDeletarComentario   = () => setIsDeleteModalOpen(!isDeleteModalOpen);

    const adicionarComentario = (data) => {
        setComentario([...comentario, data]);
    };

    const deletarComentario = (data) => {
        setComentario(comentario.filter((com) => com.id != data));
    };

    const getData = () => {
        setErrorMessage('')

        ComentarioService.getAll()
                .then(res => {
                    setComentario(res.data)
                })
                .catch(err => {
                    setErrorMessage(`Erro ao conectar com a API: ${err}`)
                })
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setComentario(comentario.map(com => com.id == comentarios.id ? comentarios : com))
    }, [comentarios]);

    function renderUserItems({item: user}) {
        return (
                <ListItem key={user.id} bottomDivider>
                    <ListItem.Content>
                        <Avatar size="medium" rounded source={user.thumb}/>
                        <ListItem.Title style={styles.titleList}>{user.name}</ListItem.Title>
                        <ListItem.Subtitle style={styles.textList}>
                            {user.post}
                        </ListItem.Subtitle>

                        <TouchableOpacity
                                type="clear"
                                onPress={() => {
                                    setModalVisible(true);
                                    setSelectedIdeiaClick(user);
                                }}
                        >
                            <Text style={styles.small}>
                                Clique aqui para ver os comentários
                            </Text>
                        </TouchableOpacity>
                    </ListItem.Content>

                    <TouchableOpacity
                            style={{position: "relative"}}
                            onPress={() => {
                                toggleAdicionarComentario();
                                setSelectedCode(user);
                            }}
                    >
                        <Text style={styles.count}>
                            {comentario.filter((value) => value.code == user.id)
                                    ? comentario.filter((value) => value.code == user.id).length
                                    : "0"}
                        </Text>
                        <FontAwesome name="comments" size={30} color="#D16E0B"/>
                    </TouchableOpacity>
                </ListItem>
        );
    }

    return (
            <>
                <Header
                        containerStyle={{
                            height: 80,
                            backgroundColor: "#1D1D1D",
                        }}
                        leftComponent={{
                            icon: "menu",
                            color: "#D16E0B",
                            onPress: navigation.openDrawer,
                            size: 35,
                        }}
                        centerComponent={{
                            text: "Feed",
                            style: styles.headerText,
                        }}
                        rightComponent={{
                            icon: "home",
                            color: "#D16E0B",
                            size: 35,
                            onPress: () => navigation.navigate("Feed"),
                        }}
                />
                <View style={styles.body}>
                    <ImageBackground
                            source={require("../images/fundo1.png")}
                            style={styles.bg}
                    >
                        <View style={styles.containerFeed}>
                            <View style={{alignItems: "center"}}>
                                <Text style={styles.title}>Últimas ideias publicadas</Text>
                            </View>

                            <FlatList
                                    data={users}
                                    renderItem={renderUserItems}
                                    keyExtractor={(user) => user.id.toString()}
                            />

                            <Modal
                                    transparent={true}
                                    animationType="slide"
                                    visible={modalVisible}
                                    onRequestClose={toogleListaComentario}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.title}>Lista de Comentários</Text>

                                        <ScrollView>
                                            {comentario.filter((data) => data.code == selectedIdeiaClick.id)
                                                    .map((data) => (
                                                            <View key={data.id.toString()} style={styles.list}>

                                                                <View style={{width: '70%'}}>
                                                                    <Text style={{fontSize: 20}}>
                                                                        {data.message}
                                                                    </Text>
                                                                </View>

                                                                <View style={styles.groupButton}>
                                                                    <Button
                                                                            type="clear"
                                                                            style={{marginHorizontal: 15}}
                                                                            icon={
                                                                                <Icon name="edit" size={25}
                                                                                      color="#1281AB"/>
                                                                            }
                                                                            onPress={() => {
                                                                                toggleEditarComentario();
                                                                                setComentarios(data);
                                                                            }}
                                                                    />
                                                                    <Button
                                                                            type="clear"
                                                                            style={{marginHorizontal: 15}}
                                                                            icon={
                                                                                <Icon name="delete" size={25}
                                                                                      color="#E76F51"/>
                                                                            }
                                                                            onPress={() => {
                                                                                toggleDeletarComentario();
                                                                                setComentarios(data);
                                                                            }}
                                                                    />
                                                                </View>
                                                            </View>
                                                    ))}
                                        </ScrollView>

                                        <View style={{alignItems: "center", width: "100%"}}>
                                            <TouchableOpacity
                                                    style={{...styles.button, backgroundColor: "#1281AB"}}
                                                    onPress={() => {
                                                        setModalVisible(!modalVisible);
                                                    }}
                                            >
                                                <Text style={styles.btnText}>Fechar janela</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>

                            {isAddModalOpen ? (
                                    <AdicionarComentario
                                            isOpen={isAddModalOpen}
                                            selectedCode={selectedCode}
                                            isClose={toggleAdicionarComentario}
                                            adicionarComentario={adicionarComentario}
                                    />
                            ) : null}

                            {isUpdateModalOpen ? (
                                    <EditarComentario
                                            isOpen={isUpdateModalOpen}
                                            isClose={toggleEditarComentario}
                                    />
                            ) : null}

                            {isDeleteModalOpen ? (
                                    <DeletarComentario
                                            isOpen={isDeleteModalOpen}
                                            isClose={toggleDeletarComentario}
                                            deletarComentario={deletarComentario}
                                    />
                            ) : null}
                        </View>
                    </ImageBackground>
                </View>
                <StatusBar style="light"/>
            </>
    );
};

export default Feed;

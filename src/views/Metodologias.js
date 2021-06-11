import React, { useState, useEffect, useContext } from 'react';

import { styles    } from '../style/style';
import { StatusBar } from 'expo-status-bar';
import { Searchbar } from 'react-native-paper';
import { ListItem, Button, Icon, Header } from 'react-native-elements';
import { Text, View, FlatList, ImageBackground, TouchableOpacity, Modal, ScrollView } from 'react-native';

import MetodologiaService     from '../../services/MetodologiaService';
import AdicionarMetodologia   from '../components/metodologias/AdicionarMetodologia';
import EditarMetodologia      from '../components/metodologias/EditarMetodologia';
import DeletarMetodologia     from '../components/metodologias/DeletarMetodologia';
import { ContextMetodologia } from '../components/metodologias/ContextMetodologia';

const Metodologias = ({ navigation }) => {

    const [modalVisible, setModalVisible]           = useState(false);
    const [isAddModalOpen, setIsAddModalOpen]       = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [metodo, setMetodo]             = useState([]);
    const [search, setSearch]             = useState('');
    const [filtered, setFiltered]         = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [metodologia, setMetodologia]   = useContext(ContextMetodologia);

    const getData = () => {
        setErrorMessage('')

        MetodologiaService.getAll()
                .then(res => {
                    setMetodo(res.data)
                    setFiltered(res.data)
                })
                .catch(err => {
                    setErrorMessage(`Erro ao conectar com a API: ${err}`)
                })
    }

    const searchFilterFunction = (text) => {
        if (text) {
            const data = metodo.filter(function (item) {
                const itemData = item.area ? item.area.toUpperCase() : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });

            setFiltered(data);
            setSearch(text);
        } else {
            setFiltered(metodo);
            setSearch(text);
        }
    };

    const toggleDetalhesMetodologia  = () => setModalVisible(!modalVisible);
    const toggleAdicionarMetodologia = () => setIsAddModalOpen(!isAddModalOpen);
    const toggleEditarMetodologia    = () => setIsUpdateModalOpen(!isUpdateModalOpen);
    const toggleDeletarMetodologia   = () => setIsDeleteModalOpen(!isDeleteModalOpen);

    const adicionarMetodologia = (data) => {
        setMetodo([data, ...metodo]);
        setFiltered([data, ...filtered]);
    };

    const deletarMetodologia = (data) => {
        setMetodo(metodo.filter((item) => item.id !== data));
        setFiltered(filtered.filter((item) => item.id !== data));
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setMetodo(metodo.map(item => item.id == metodologia.id ? metodologia : item))
        setFiltered(filtered.map(item => item.id == metodologia.id ? metodologia : item))
    }, [metodologia]);

    function getActions(data) {
        return (
                <View style={styles.groupButton}>
                    <Button
                            type="clear"
                            style={{ marginHorizontal: 40 }}
                            icon={<Icon name="edit" size={30} color="#1281AB" />}
                            onPress={() => {
                                toggleEditarMetodologia();
                                setMetodologia(data);
                            }}
                    />

                    <Button
                            type="clear"
                            style={{ marginHorizontal: 40 }}
                            icon={<Icon name="delete" size={30} color="#E76F51" />}
                            onPress={() => {
                                toggleDeletarMetodologia();
                                setMetodologia(data);
                            }}
                    />
                </View>
        );
    }

    function renderDataItems({ item: data }) {
        return (
                <ListItem
                        bottomDivider
                        key={data.id}
                        onPress={() => {
                            setModalVisible(true);
                            setMetodologia(data);
                        }}
                >
                    <ListItem.Content>
                        <ListItem.Title style={styles.titleList}>{data.title}</ListItem.Title>
                        <ListItem.Subtitle style={styles.textList}>
                            {data.area}
                        </ListItem.Subtitle>
                    </ListItem.Content>

                    {getActions(data)}
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
                            size: 35,
                            icon: "menu",
                            color: "#D16E0B",
                            onPress: navigation.openDrawer,
                        }}
                        centerComponent={{
                            text: "Metodologias",
                            style: styles.headerText,
                        }}
                        rightComponent={{
                            size: 35,
                            icon: "add",
                            color: "#D16E0B",
                            onPress: () => toggleAdicionarMetodologia(),
                        }}
                />

                <View style={styles.body}>
                    <ImageBackground
                            source={require("../images/fundo1.png")}
                            style={styles.bg}
                    >
                        <View style={styles.containerFeed}>
                            <View style={{ alignItems: "center" }}>
                                <Text style={styles.title}>Materiais para estudo</Text>
                            </View>

                            <Searchbar
                                    value={search}
                                    autoCorrect={false}
                                    style={{ width: '100%', marginBottom: 10 }}
                                    placeholder="Filtrar por área de estudo..."
                                    onClear={(text) => searchFilterFunction("")}
                                    onChangeText={(text) => searchFilterFunction(text)}
                            />

                            <FlatList
                                    data={filtered}
                                    renderItem={renderDataItems}
                                    keyExtractor={(items, index) => index.toString()}
                            />

                            {
                                errorMessage !== "" ? <Text>{errorMessage}</Text> : null
                            }

                                    <Modal
                                    transparent
                                    animationType="slide"
                                    visible={modalVisible}
                                    onRequestClose={toggleDetalhesMetodologia}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <View style={{ marginLeft: 15 }}>
                                            <Text style={styles.title}>Detalhes do Material</Text>
                                        </View>

                                        <ScrollView>
                                            {
                                                <View
                                                        key={metodologia.id}
                                                        style={styles.listModal}
                                                >
                                                    <View style={styles.listDetails}>
                                                        <Text style={styles.listDetailsStrong}>Título: </Text>
                                                        <Text style={styles.listDetailsText}>
                                                            {metodologia.title}
                                                        </Text>
                                                    </View>

                                                    <View style={styles.listDetails}>
                                                        <Text style={styles.listDetailsStrong}>
                                                            Área de Estudo:{" "}
                                                        </Text>
                                                        <Text style={styles.listDetailsText}>
                                                            {metodologia.area}
                                                        </Text>
                                                    </View>

                                                    <View style={styles.listDetails}>
                                                        <Text style={styles.listDetailsStrong}>
                                                            Definição:{" "}
                                                        </Text>
                                                        <Text style={styles.listDetailsText}>
                                                            {metodologia.definition}
                                                        </Text>
                                                    </View>

                                                    <View style={styles.listDetails}>
                                                        <Text style={styles.listDetailsStrong}>
                                                            Informações adicionais:{" "}
                                                        </Text>
                                                        <Text style={styles.listDetailsText}>
                                                            {metodologia.description}
                                                        </Text>
                                                    </View>

                                                    <View style={styles.listDetails}>
                                                        <Text style={styles.listDetailsStrong}>
                                                            Objetivo:{" "}
                                                        </Text>
                                                        <Text style={styles.listDetailsText}>
                                                            {metodologia.objective}
                                                        </Text>
                                                    </View>

                                                    <View style={styles.listDetails}>
                                                        <Text style={styles.listDetailsStrong}>
                                                            Esse material é autoral?{" "}
                                                        </Text>
                                                        <Text style={styles.listDetailsText}>
                                                            {metodologia.references}
                                                        </Text>
                                                    </View>
                                                </View>
                                            }
                                        </ScrollView>

                                        <View
                                                style={{
                                                    alignItems: "center",
                                                    width: "100%",
                                                    justifyContent: "center",
                                                }}
                                        >
                                            <TouchableOpacity
                                                    style={{
                                                        ...styles.button,
                                                        backgroundColor: "#1281AB",
                                                        marginLeft: 15,
                                                    }}
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
                                    <AdicionarMetodologia
                                            isOpen={isAddModalOpen}
                                            isClose={toggleAdicionarMetodologia}
                                            adicionarMetodologia={adicionarMetodologia}
                                    />
                            ) : null}

                            {isUpdateModalOpen ? (
                                    <EditarMetodologia
                                            isOpen={isUpdateModalOpen}
                                            isClose={toggleEditarMetodologia}
                                    />
                            ) : null}

                            {isDeleteModalOpen ? (
                                    <DeletarMetodologia
                                            isOpen={isDeleteModalOpen}
                                            isClose={toggleDeletarMetodologia}
                                            deletarMetodologia={deletarMetodologia}
                                    />
                            ) : null}
                        </View>
                    </ImageBackground>
                </View>
                <StatusBar style="light" />
            </>
    );
};

export default Metodologias;

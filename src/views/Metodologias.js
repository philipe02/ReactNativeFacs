import React, { useState, useEffect } from 'react';
import { styles } from '../style/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, FlatList, ImageBackground, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { ListItem, Button, Icon, Header } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

import method from "../components/metodologias/metodologia"

import AdicionarMetodologia from '../components/metodologias/AdicionarMetodologia';
import EditarMetodologia from '../components/metodologias/EditarMetodologia';
import DeletarMetodologia from '../components/metodologias/DeletarMetodologia';

const Metodologias = ({ navigation }) => {

    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    const [selectedMetodologia, setSelectedMetodologia] = useState([])
    const [metodologia, setMetodologia] = useState(false)

    const [modalVisible, setModalVisible] = useState(false)

    const toogleDetailsMetodologia = () => {
        setModalVisible(! modalVisible)
    }

    const toggleAdicionarMetodologia = () => {
        setIsAddModalOpen(! isAddModalOpen)
    }

    const toggleEditarMetodologia = () => {
        setIsUpdateModalOpen(! isUpdateModalOpen)
    }

    const toggleDeletarMetodologia = () => {
        setIsDeleteModalOpen(! isDeleteModalOpen)
    }

    const adicionarMetodologia = (data) => {
        try {
            let idNovaMetodologia = metodologia[metodologia.length - 1].id + 1
            data = { id: idNovaMetodologia, ...data }
            setMetodologia( [...metodologia, data])
        } catch {
            data = { id: 1, ...data }
            setMetodologia( [...metodologia, data])
        }
    }

    const editarMetodologia = (data) => {
        setMetodologia(metodologia.map(com => com.id === data.id ? data : com))
    }

    const deletarMetodologia = data => {
        setMetodologia(metodologia.filter(com => com.id !== data))
    }

    useEffect(() => {
        async function CarregarMetodologia() {
            const methodStorage = await AsyncStorage.getItem('@metodologia')
            if(methodStorage) setMetodologia(JSON.parse(methodStorage))
        }

        CarregarMetodologia()
    }, [])

    useEffect(() => {
        async function SalvarMetodologia() {
            await AsyncStorage.setItem('@metodologia', JSON.stringify(metodologia))
        }
    }, [metodologia])

    function getActions(data) {
        return(
            <>
                <Button
                        type="clear"
                        style={{ marginHorizontal: 15 }}
                        icon={ <Icon name="edit" size={25} color="#1281AB"/> }
                        onPress={() => {toggleEditarMetodologia(); setSelectedMetodologia(data)}}
                />

                <Button
                        type="clear"
                        style={{ marginHorizontal: 15 }}
                        icon={ <Icon name="delete" size={25} color="#E76F51"/> }
                        onPress={() => {toggleDeletarMetodologia(); setSelectedMetodologia(data)}}
                />
            </>
        )
    }

    function renderDataItems({ item : data }) {
        return(
            <ListItem key={ data.id } bottomDivider onPress={ () => {setSelectedMetodologia(data); setModalVisible(true)} }>
                <ListItem.Content>
                    <ListItem.Title style={ styles.titleList }>{ data.title }</ListItem.Title>
                    <ListItem.Subtitle style={ styles.textList }>{ data.definition }</ListItem.Subtitle>
                </ListItem.Content>

                { getActions(data) }
            </ListItem>
        )
    }

    return(
        <>
            <Header
                containerStyle={{
                    height: 80,
                    backgroundColor: "#1D1D1D"
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
                    onPress: () =>  toggleAdicionarMetodologia() ,
                }}
            />

            <View style={ styles.body }>
                <ImageBackground source={ require('../images/fundo1.png') } style={ styles.bg }>
                    <View style={ styles.containerFeed }>

                        <View style={{ alignItems: 'center' }}>
                            <Text style={ styles.title }>Lista de metodologias</Text>
                        </View>

                        <FlatList
                            data={ method }
                            renderItem={ renderDataItems }
                            keyExtractor={ user => user.id.toString() }
                        />

                        <Modal transparent
                               animationType="slide"
                               visible={ modalVisible }
                               onRequestClose={ toogleDetailsMetodologia }>

                            <View style={ styles.centeredView }>
                                <View style={ styles.modalView }>
                                    <Text style={ styles.title }>Detalhes da metodologia</Text>

                                    <ScrollView>
                                        {
                                            <View key={ selectedMetodologia.id } style={{...styles.list, flexDirection: 'column', justifyContent: 'center'}}>

                                                <View style={{ flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginBottom: 15 }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Título: </Text>
                                                    <Text style={{ fontWeight: 'normal', fontSize: 18 }}>{ selectedMetodologia.title }</Text>
                                                </View>

                                                <View style={{ flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginBottom: 15 }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Área de estudos: </Text>
                                                    <Text style={{ fontWeight: 'normal', fontSize: 18 }}>{ selectedMetodologia.area }</Text>
                                                </View>

                                                <View style={{ flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginBottom: 15 }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Definição: </Text>
                                                    <Text style={{ fontWeight: 'normal', fontSize: 18 }}>{ selectedMetodologia.definition }</Text>
                                                </View>

                                                <View style={{ flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginBottom: 15 }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Objetivo: </Text>
                                                    <Text style={{ fontWeight: 'normal', fontSize: 18 }}>{ selectedMetodologia.objective }</Text>
                                                </View>

                                                <View style={{ flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginBottom: 15 }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Informações adicionais: </Text>
                                                    <Text style={{ fontWeight: 'normal', fontSize: 18 }}>{ selectedMetodologia.description }</Text>
                                                </View>
                                            </View>
                                        }
                                    </ScrollView>

                                    <View style={{ alignItems: 'center', width: '100%' }} >
                                        <TouchableOpacity
                                                style={{ ...styles.button, backgroundColor: '#1281AB' }}
                                                onPress={ () => {setModalVisible(!modalVisible);} }
                                        >
                                            <Text style={ styles.btnText }>Fechar janela</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>

                        {
                            isAddModalOpen ?
                            <AdicionarMetodologia
                                    isOpen={ isAddModalOpen }
                                    isClose={ toggleAdicionarMetodologia }
                                    adicionarMetodologia={ adicionarMetodologia }
                            />
                            : null
                        }

                        {
                            isUpdateModalOpen ?
                            <EditarMetodologia
                                    isOpen={ isUpdateModalOpen }
                                    isClose={ toggleEditarMetodologia }
                                    editarMetodologia={ editarMetodologia }
                                    selectedMetodologia={ selectedMetodologia }
                            />
                            : null
                        }

                        {
                            isDeleteModalOpen ?
                            <DeletarMetodologia
                                    isOpen={ isDeleteModalOpen }
                                    isClose={ toggleDeletarMetodologia }
                                    deletarMetodologia={ deletarMetodologia }
                                    selectedMetodologia={ selectedMetodologia }
                            />
                            : null
                        }
                    </View>
                </ImageBackground>
            </View>
        </>
    )
}

export default Metodologias;

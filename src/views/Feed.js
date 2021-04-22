import React, {useState} from 'react';
import { styles } from '../style/style';
import { StyleSheet, Text, View, FlatList, ImageBackground, TouchableOpacity, Modal } from 'react-native';
import { ListItem, Avatar, Header, Button, Icon } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

import users from './Users';
import AdicionarComentario from '../components/comentarios/AdicionarComentario';
import EditarComentario from '../components/comentarios/EditarComentario';
import DeletarComentario from '../components/comentarios/DeletarComentario';

const Feed = ({ navigation }) => {

    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [comentario, setComentario] = useState([])

    const [selectedCode, setSelectedCode] = useState(false)
    const [selectedComentario, setSelectedComentario] = useState(false)

    const [modalVisible, setModalVisible] = useState(false);

    const toggleAdicionarComentario = () => {
        setIsAddModalOpen(! isAddModalOpen)
    }

    const toggleEditarComentario = () => {
        setIsUpdateModalOpen(! isUpdateModalOpen)
    }

    const toggleDeletarComentario = () => {
        setIsDeleteModalOpen(! isDeleteModalOpen)
    }

    const adicionarComentario = (data) => {
        setComentario([data, ...comentario])
    }

    const editarComentario = (data) => {
        setComentario(comentario.map(com => com.message == data.message ? data : com))
    }

    const deletarComentario = data => {
        setComentario(comentario.filter(com => com.message != data))
    }

    function renderUserItems({ item:user }) {
        return(
            <ListItem key={ user.id } bottomDivider>
                <ListItem.Content>
                    <Avatar size="medium" rounded source={ user.thumb }/>
                    <ListItem.Title style={{ marginTop: 10 }}>{ user.name }</ListItem.Title>
                    <ListItem.Subtitle>{ user.post }</ListItem.Subtitle>
                    <TouchableOpacity type="clear" onPress={ () => {setModalVisible(true);} }>
                        <Text style={ styles.small }>Clique aqui para ver os comentários</Text>
                    </TouchableOpacity>
                </ListItem.Content>

                <TouchableOpacity style={{ position: 'relative' }}
                                  onPress={ () => { toggleAdicionarComentario(); setSelectedCode(user)} }>
                    <Text style={ styles.count }>
                        {
                            comentario.filter((value) => (value.code == user.id)) ?
                            comentario.filter((value) => (value.code == user.id)).length
                            : '0'
                        }
                    </Text>
                    <FontAwesome name="comments" size={24} color="#D16E0B"/>
                </TouchableOpacity>
            </ListItem>
        )
    }

    return(
        <>
            <Header
                containerStyle={{ height: 80, backgroundColor: "#1D1D1D" }}
                leftComponent={{
                    icon: "menu",
                    color: "#D16E0B",
                    onPress: navigation.openDrawer,
                    size: 40,
                }}
                centerComponent={{
                    text: "Entropia",
                    style: styles.headerText,
                }}
                rightComponent={{
                    icon: "home",
                    color: "#D16E0B",
                    size: 40,
                    onPress: () => navigation.navigate("Inicio"),
                }}
            />

            <View style={ styles.body }>
                <ImageBackground source={ require('../images/fundo1.png') } style={ styles.bg }>
                    <View style={ styles.containerFeed }>
                        <Text style={ styles.title }>Últimas ideias publicadas</Text>

                        <FlatList keyExtractor={ user => user.id.toString() }
                                  data={ users } renderItem={ renderUserItems }/>

                        <Modal animationType="slide" transparent={true} visible={modalVisible}
                               onRequestClose={ () => {alert('O modal está fechado!');} }>
                            <View style={ styles.centeredView }>
                                <View style={ styles.modalView }>
                                    <Text style={ styles.title }>Lista de Comentários</Text>

                                    { comentario.map((data, index) =>
                                        <View key={ index.toString() } style={ styles.list }>
                                            <Text style={{ fontSize: 20, width: '75%' }}>{ data.message }</Text>

                                            <View style={ styles.groupButton }>
                                                <Button type="clear"
                                                        style={{marginHorizontal: 15}}
                                                        icon={ <Icon name="edit" size={25} color="#1281AB"/> }
                                                        onPress={ () => {toggleEditarComentario(); setSelectedComentario(data)} }
                                                />
                                                <Button type="clear"
                                                        style={{marginHorizontal: 15}}
                                                        icon={ <Icon name="delete" size={25} color="#E76F51"/> }
                                                        onPress={ () => {toggleDeletarComentario(); setSelectedComentario(data)} }
                                                />
                                            </View>
                                        </View>
                                    ) }

                                    <View style={{ alignItems: 'center', width: '100%' }} >
                                        <TouchableOpacity style={{ ...styles.button, backgroundColor: '#1281AB' }}
                                                          onPress={ () => {setModalVisible(!modalVisible);} }>
                                            <Text style={ styles.btnText }>Fechar janela</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>

                        {
                            isAddModalOpen ?
                            <AdicionarComentario
                                    isOpen={ isAddModalOpen }
                                    selectedCode={ selectedCode }
                                    isClose={ toggleAdicionarComentario }
                                    adicionarComentario={ adicionarComentario }
                            />
                            : null
                        }

                        {
                            isUpdateModalOpen ?
                            <EditarComentario
                                    isOpen={ isUpdateModalOpen }
                                    isClose={ toggleEditarComentario }
                                    editarComentario={ editarComentario }
                                    selectedComentario={ selectedComentario }
                            />
                            : null
                        }

                        {
                            isDeleteModalOpen ?
                            <DeletarComentario
                                    isOpen={ isDeleteModalOpen }
                                    isClose={ toggleDeletarComentario }
                                    deletarComentario={ deletarComentario }
                                    selectedComentario={ selectedComentario }
                            />
                            : null
                        }
                    </View>
                </ImageBackground>
            </View>
        </>
    )
}

export default Feed;

const main = StyleSheet.create({
    centeredView: {
        flex: 1,
        width: '100%',
        marginTop: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        margin: 20,
        width: 365,
        height: 615,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 5,
        shadowRadius: 3.84,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
    },
    openButton: {
        padding: 15,
        elevation: 2,
        borderRadius: 5,
        backgroundColor: '#F194FF',
    },
    textStyle: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})

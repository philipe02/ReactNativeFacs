import React, {useState} from 'react';
import { styles } from '../style/style';
import { StyleSheet, Text, View, FlatList, ImageBackground, TouchableOpacity, Modal } from 'react-native';
import { ListItem, Avatar, Header } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

import users from './Users';

const Feed = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);

    function renderCommentsItems({ item:user }) {
        return(<Text style={styles.text}>Comentário 0{user.id}</Text>)
    }

    function renderUserItems({ item:user }) {
        return(
                <ListItem key={ user.id } bottomDivider>
                    <Avatar size="medium" rounded source={ user.thumb }/>
                    <ListItem.Content>
                        <ListItem.Title>{ user.name }</ListItem.Title>
                        <ListItem.Subtitle>{ user.post }</ListItem.Subtitle>
                    </ListItem.Content>

                    <TouchableOpacity style={{ position: 'relative' }} onPress={ () => {setModalVisible(true);} }>
                        <Text style={ styles.count }>{ user.comments.length }</Text>
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
                        <Modal animationType="fade" transparent={true} visible={modalVisible}
                               onRequestClose={ () => {alert('O modal está fechado!');} }>
                            <View style={ main.centeredView }>
                                <View style={ main.modalView }>
                                    <Text style={ styles.title }>Lista de Comentários</Text>
                                    <FlatList keyExtractor={ user => user.id.toString() } data={ users } renderItem={ renderCommentsItems }/>

                                    <TouchableOpacity style={{ ...main.openButton, backgroundColor: '#1281AB' }}
                                                      onPress={ () => {setModalVisible(!modalVisible);} }>
                                        <Text style={main.textStyle}>Fechar janela</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>

                        <Text style={ styles.title }>Últimas ideias publicadas</Text>
                        <FlatList keyExtractor={ user => user.id.toString() } data={ users } renderItem={ renderUserItems }/>
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

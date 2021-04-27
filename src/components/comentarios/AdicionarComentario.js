import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

import { styles } from '../../style/style';
import ListaComentario from './ListaComentario';

const AdicionarComentario = (props) => {

    const [comentario, setComentario] = useState(ListaComentario)
    const { isOpen, isClose, selectedCode } = props

    const handleChange = (value, name) => {
        setComentario( {...comentario, [name] : value} )
    }

    const adicionarComentario = async() => {
        props.adicionarComentario({
            code: selectedCode.id,
            message: comentario.message
        })
        props.isClose()
    }

    return(
        <Modal visible={ isOpen } onRequestClose={ isClose } animationType="slide" transparent>
            <View style={ styles.centeredView }>
                <View style={ styles.modalView }>
                    <Text style={ styles.title }>Adicionar Comentário</Text>

                    <TextInput
                        mode="outlined"
                        label="Comentário"
                        placeholder="Deixe o seu comentário aqui: "
                        onChangeText={(text) => handleChange(text, 'message')}
                    />

                    <View style={ styles.groupButton }>
                        <TouchableOpacity onPress={ adicionarComentario } style={{...styles.button, backgroundColor: "#1281AB"}}>
                            <Text style={ styles.btnText }>Salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ isClose } style={{...styles.button, backgroundColor: "#E76F51"}}>
                            <Text style={ styles.btnText }>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AdicionarComentario

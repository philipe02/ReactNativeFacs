import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';

import { styles } from '../../style/style';

const AdicionarComentario = (props) => {

    const initialComentarioState = {
        id : 0,
        code : "",
        message : ""
    }

    const [comentario, setComentario] = useState(initialComentarioState)
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
        <Modal visible={ isOpen } onRequestClose={ isClose } animationType="slide">
            <View style={ styles.centeredView }>
                <View style={ styles.modalView }>
                    <Text style={ styles.title }>Adicionar Comentário</Text>

                    <TextInput style={ styles.input }
                               placeholder="Digite o comentário aqui: "
                               onChangeText={ (text) => handleChange(text, 'message') }
                    />

                    <View style={ styles.groupButton }>
                        <TouchableOpacity onPress={adicionarComentario} style={{...styles.button, backgroundColor: "#1281AB"}}>
                            <Text style={ styles.btnText }>Salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={isClose} style={{...styles.button, backgroundColor: "#E76F51"}}>
                            <Text style={ styles.btnText }>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AdicionarComentario

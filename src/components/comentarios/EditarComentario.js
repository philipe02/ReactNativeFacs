import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../../style/style';


const EditarComentario = (props) => {

    const initialComentarioState = {
        id: 0,
        code : "",
        message : ""
    }

    const [comentario, setComentario] = useState(initialComentarioState)
    const { isOpen, isClose } = props

    const handleChange = (value, name) => {
        setComentario( {...comentario, [name] : value} )
    }

    useEffect( () => {
        const data = {
            id: props.selectedComentario.id,
            code: props.selectedComentario.code,
            message: props.selectedComentario.message
        };
        setComentario(data)
    }, [])

    const editarComentario = () => {
        props.editarComentario({
            id: comentario.id,
            code: comentario.code,
            message: comentario.message
        })
        props.isClose()
    }

    return(
        <Modal visible={ isOpen } onRequestClose={ isClose } animationType="slide" transparent>
            <View style={ styles.centeredView }>
                <View style={ styles.modalView }>
                    <Text style={ styles.title }>Editar o comentário</Text>

                    <TextInput style={ styles.input }
                               value={ comentario.message }
                               placeholder="Digite o comentário aqui: "
                               onChangeText={ (text) => handleChange(text, 'message') }
                    />

                    <View style={ styles.groupButton }>
                        <TouchableOpacity onPress={ editarComentario } style={{ ...styles.button, backgroundColor: "#1281AB" }}>
                            <Text style={ styles.btnText }>Atualizar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ isClose } style={{ ...styles.button, backgroundColor: "#E76F51" }}>
                            <Text style={ styles.btnText }>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default EditarComentario

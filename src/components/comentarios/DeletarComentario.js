import React, { useState } from 'react';
import {Modal, Text, TextInput, TouchableOpacity, View} from "react-native";
import { styles } from '../../style/style';

const DeletarComentario = (props) => {

    const { isOpen, isClose, selectedComentario } = props

    const deletarComentario = () => {
        props.deletarComentario(props.selectedComentario.message)
        props.isClose()
    }

    return(
        <Modal visible={ isOpen } onRequestClose={ isClose } animationType="slide" transparent>
            <View style={ styles.centeredView }>
                <View style={ styles.modalView }>
                    <Text style={ styles.title }>Deseja apagar esse comentario? ({selectedComentario.message})</Text>
                    <Text style={ styles.text }>Para confirmar aperte em OK</Text>

                    <View style={ styles.groupButton }>
                        <TouchableOpacity onPress={ deletarComentario } style={{ ...styles.button, backgroundColor: "#1281AB" }}>
                            <Text style={ styles.btnText }>OK</Text>
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

export default DeletarComentario;

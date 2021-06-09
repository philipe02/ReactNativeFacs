import React, { useState, useContext } from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../style/style';

import { ContextMetodologia } from './ContextMetodologia';
import MetodologiaService from '../../../services/MetodologiaService';

const DeletarMetodologia = (props) => {

    const { isOpen, isClose } = props
    const [metodologia, setMetodologia] = useContext(ContextMetodologia);
    const [errorMessage, setErrorMessage] = useState('');

    const deletarMetodologia = () => {
        const id = metodologia.id

        MetodologiaService.remove(id)
                .then(res => {
                    props.deletarMetodologia(metodologia.title)
                    props.isClose()
                })
                .catch(err => {
                    setErrorMessage(`Erro ao conectar com a API: ${err}`)
                })
    }

    return(
        <Modal visible={ isOpen } onRequestClose={ isClose } animationType="slide" transparent>
            <View style={ styles.centeredView }>
                <View style={ styles.modalView }>
                    <Text style={ styles.title }>Deseja apagar essa metodologia? ({ metodologia.title })</Text>
                    <Text style={ styles.text }>Para confirmar aperte em OK</Text>

                    <View style={ styles.groupButton }>
                        <TouchableOpacity onPress={ deletarMetodologia } style={{ ...styles.button, backgroundColor: "#1281AB" }}>
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

export default DeletarMetodologia;

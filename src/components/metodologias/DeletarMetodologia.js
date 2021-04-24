import React from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../style/style';

const DeletarMetodologia = (props) => {

    const { isOpen, isClose, selectedMetodologia } = props

    const deletarMetodologia = () => {
        props.deletarMetodologia(props.selectedMetodologia.id)
        props.isClose()
    }

    return(
        <Modal visible={ isOpen } onRequestClose={ isClose } animationType="slide" transparent>
            <View style={ styles.centeredView }>
                <View style={ styles.modalView }>
                    <Text style={ styles.title }>Deseja apagar essa metodologia? ({ selectedMetodologia.id })</Text>
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

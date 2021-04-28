import React, { useState } from 'react';
import {HelperText, Snackbar, TextInput} from 'react-native-paper';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

import { styles } from '../../style/style';
import ListaComentario from './ListaComentario';
import metodologia from "../metodologias/metodologia";

const AdicionarComentario = (props) => {

    const [comentario, setComentario] = useState(ListaComentario)
    const { isOpen, isClose, selectedCode } = props

    const [addInvalid, setAddInvalid] = useState(false);
    const [error, setError] = useState(false)
    const onDismissSnackBar = () => setError(false);

    const handleChange = (value, name) => {
        if(value) {
            setAddInvalid(false)
            setComentario( {...comentario, [name] : value} )
        }else {
            setAddInvalid(true)
        }
    }

    const adicionarComentario = async() => {
        if(metodologia.message == "") {
            setError(true)
        }else {
            setError(false)
            props.adicionarComentario({
                code: selectedCode.id,
                message: comentario.message
            })
            props.isClose()
        }
    }

    return(
        <Modal visible={ isOpen } onRequestClose={ isClose } animationType="slide" transparent>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={ styles.title }>Adicionar Comentário</Text>

                    <View style={{width: 350, height: 70}}>
                        <TextInput
                                mode="outlined"
                                label="Comentário"
                                error={addInvalid}
                                placeholder="Deixe o seu comentário aqui: "
                                onChangeText={(text) => handleChange(text, 'message')}
                        />
                        <HelperText
                                type="error"
                                padding="none"
                                style={{fontSize: 15}}
                                visible={addInvalid}
                        >
                            Preencha o campo!
                        </HelperText>
                    </View>

                    <Snackbar
                            visible={error}
                            onDismiss={onDismissSnackBar}
                            style={{width: 340}}
                            action={{
                                label: 'fechar',
                                onPress: () => setError(false),
                            }}>
                        Preencha os campos corretamente!
                    </Snackbar>

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

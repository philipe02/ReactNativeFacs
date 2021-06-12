import React, {useContext, useState} from "react";

import { styles } from "../../style/style";
import { ContextComentario } from "./ContextComentario";
import ComentarioService from "../../../services/ComentarioService";
import { View, Modal, Text, TouchableOpacity } from "react-native";

const DeletarComentario = (props) => {

    const { isOpen, isClose } = props;
    const [comentarios, setComentarios] = useContext(ContextComentario);
    const [errorMessage, setErrorMessage] = useState('');

    const deletarComentario = () => {

        const id = comentarios.id;
        ComentarioService.remove(id)
                         .then(res => {
                             props.deletarComentario(comentarios.id);
                             props.isClose();
                         })
                         .catch(err => {
                             setErrorMessage(`Erro ao conectar com a API: ${err}`)
                         })
    };

    return (
            <Modal
                    visible={isOpen}
                    onRequestClose={isClose}
                    animationType="slide"
                    transparent
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.title}>
                            Deseja apagar esse comentario? ({comentarios.id})
                        </Text>
                        <Text style={styles.text}>Para confirmar aperte em OK</Text>

                        <View style={styles.groupButton}>
                            <TouchableOpacity
                                    onPress={deletarComentario}
                                    style={{ ...styles.button, backgroundColor: "#1281AB" }}
                            >
                                <Text style={styles.btnText}>OK</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                    onPress={isClose}
                                    style={{ ...styles.button, backgroundColor: "#E76F51" }}
                            >
                                <Text style={styles.btnText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
    );
};

export default DeletarComentario;

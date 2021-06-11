import React, { useState, useContext } from "react";
import { styles } from "../../style/style";

import { ContextComentario } from "./ContextComentario";
import ComentarioService from "../../../services/ComentarioService";

import { View, Text, Modal, TouchableOpacity } from "react-native";
import { HelperText, Snackbar, TextInput } from "react-native-paper";

const EditarComentario = (props) => {
    const { isOpen, isClose } = props;
    const [comentarios, setComentarios] = useContext(ContextComentario);

    const [error, setError] = useState(false);
    const onDismissSnackBar = () => setError(false);
    const [addInvalid, setAddInvalid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (value, name) => {
        if (value) {
            setAddInvalid(false);
            setComentarios({ ...comentarios, [name]: value });
        } else {
            setAddInvalid(true);
        }
    };

    const editarComentario = () => {
        if (comentarios.message) {
            setError(false);

            const id = comentarios.id
            const data = {
                code: comentarios.code,
                message: comentarios.message
            }

            ComentarioService.update(id, data)
                             .then(res => {
                                 setComentarios({
                                     id: res.data.id,
                                     code: res.data.code,
                                     message: res.data.message
                                 })

                                 props.isClose();
                             })
                             .catch(err => {
                                 setErrorMessage(`Erro ao conectar na API: ${err}`)
                             })
        } else {
            setError(true);
        }
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
                        <Text style={styles.title}>Editar o comentário</Text>

                        <View style={{ width: 350, height: 70 }}>
                            <TextInput
                                    mode="outlined"
                                    label="Comentário"
                                    error={addInvalid}
                                    value={comentarios.message}
                                    placeholder="Deixe o seu comentário aqui: "
                                    onChangeText={(text) => handleChange(text, "message")}
                            />
                            <HelperText
                                    type="error"
                                    padding="none"
                                    style={{ fontSize: 15 }}
                                    visible={addInvalid}
                            >
                                Preencha o campo!
                            </HelperText>
                        </View>

                        <Snackbar
                                visible={error}
                                style={{ width: 340 }}
                                onDismiss={onDismissSnackBar}
                                action={{ label: "fechar", onPress: () => setError(false) }}
                        >
                            Necessário preencher o campo!
                        </Snackbar>

                        <View style={styles.groupButton}>
                            <TouchableOpacity
                                    onPress={editarComentario}
                                    style={{ ...styles.button, backgroundColor: "#1281AB" }}
                            >
                                <Text style={styles.btnText}>Atualizar</Text>
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

export default EditarComentario;

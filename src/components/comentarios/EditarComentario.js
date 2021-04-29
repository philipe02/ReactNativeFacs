import React, { useState, useEffect } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { styles } from "../../style/style";
import ListaComentario from "./ListaComentario";
import metodologia from "../metodologias/metodologia";
import { HelperText, Snackbar, TextInput } from "react-native-paper";

const EditarComentario = (props) => {
  const [comentario, setComentario] = useState(ListaComentario);
  const { isOpen, isClose } = props;

  const [addInvalid, setAddInvalid] = useState(false);
  const [error, setError] = useState(false);
  const onDismissSnackBar = () => setError(false);

  const handleChange = (value, name) => {
    if (value) {
      setAddInvalid(false);
      setComentario({ ...comentario, [name]: value });
    } else {
      setAddInvalid(true);
    }
  };

  useEffect(() => {
    const data = {
      id: props.selectedComentario.id,
      code: props.selectedComentario.code,
      message: props.selectedComentario.message,
    };
    setComentario(data);
  }, []);

  const editarComentario = () => {
    if (metodologia.message == "") {
      setError(true);
    } else {
      setError(false);
      props.editarComentario({
        id: comentario.id,
        code: comentario.code,
        message: comentario.message,
      });
      props.isClose();
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
              value={comentario.message}
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

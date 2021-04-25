import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from "react-native";
import { styles } from "../style/style";
import { Header } from "react-native-elements";

const DeletIdeias = (props) => {
  const { openIdeiaModal, closeIdeiaModal, selectedIdeia } = props;

  const deletIdeia = () => {
    props.deletIdeia(props.selectedIdeia.id);
    props.closeIdeiaModal();
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fase"
        transparent={false}
        visible={openIdeiaModal}
        onRequestClose={closeIdeiaModal}
      >
        <Header
          containerStyle={{ height: 50, backgroundColor: "#1D1D1D" }}
          centerComponent={{
            text: "Suas ideias",
            style: styles.headerText,
          }}
        />
        <ImageBackground
          source={require("../images/fundo1.png")}
          style={styles.bgImage}
        >
          <View style={styles.containerExclusao}>
            <Text style={styles.tituloExclusao}>
              Deseja excluir a ideia: {selectedIdeia.titulo} ?{" "}
            </Text>

            <View style={styles.botaoContainer}>
              <TouchableOpacity
                onPress={deletIdeia}
                style={{
                  ...styles.botaoSalveCancel,
                  marginVertical: 0,
                  position: "absolute",
                  right: 30,
                  backgroundColor: "#127289",
                }}
              >
                <Text style={styles.textBotaoSalveCancel}>OK</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={closeIdeiaModal}
                style={{ ...styles.botaoSalveCancel, backgroundColor: "red" }}
              >
                <Text style={styles.textBotaoSalveCancel}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <StatusBar style="light" />
        </ImageBackground>
      </Modal>
    </View>
  );
};

export default DeletIdeias;

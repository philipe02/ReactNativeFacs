import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Modal,
    Alert,
    Switch,
} from "react-native";
import { styles } from "../../style/style";
import { Header, Input } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { RadioButton } from "react-native-paper";
import IdeiaService from "../../../services/IdeiaService";
import { useSelector } from "react-redux";

const AddIdeias = (props) => {
    const initialIdeiasState = {
        titulo: "",
        desc: "",
        tema: "Selecione um tema",
        benefMalef: "",
        homeSimNao: false,
    };

    const { usuarioAtual } = useSelector((state) => state.UsuarioReducer);
    const [ideia, setIdeia] = useState(initialIdeiasState);
    const [checked, setChecked] = useState(ideia.benefMalef);
    const [isEnabled, setIsEnabled] = useState(ideia.homeSimNao);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const { openIdeiaModal, closeIdeiaModal } = props;
    const [msgErro, setMsgErro] = useState("");

    const handleChance = (value, name) => {
        setIdeia({ ...ideia, [name]: value });
    };

    const addIdeia = async () => {
        if (!ideia.titulo || ideia.titulo === "")
            Alert.alert("Título Obrigatório.");
        else if (!ideia.desc || ideia.desc === "")
            Alert.alert("Descrição Obrigatória.");
        else if (ideia.tema === "Selecione um tema")
            Alert.alert("Selecione o tema abordado.");
        else {
            const data = {
                id: ideia.id,
                userId: usuarioAtual.id,
                titulo: ideia.titulo,
                desc: ideia.desc,
                tema: ideia.tema,
                benefMalef: checked,
                homeSimNao: isEnabled,
            };
            IdeiaService.create(data)
                .then((resp) => {
                    props.addIdeia({
                        id: resp.data.id,
                        userId: resp.data.userId,
                        titulo: resp.data.titulo,
                        desc: resp.data.desc,
                        tema: resp.data.tema,
                        benefMalef: checked,
                        homeSimNao: isEnabled,
                    });
                    props.closeIdeiaModal();
                })
                .catch((error) => {
                    console.log(error);
                    setMsgErro("Erro de conexão com API.");
                });
        }
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
                    source={require("../../images/fundo1.png")}
                    style={styles.bgImage}
                >
                    <Text style={styles.tituloInput}>Título: </Text>
                    <Input
                        placeholder="Como você chama essa ideia ?"
                        inputStyle={{
                            paddingLeft: 10,
                            paddingTop: 2,
                            backgroundColor: "#fff",
                            borderRadius: 4,
                            marginRight: 8,
                        }}
                        containerStyle={{
                            justifyContent: "center",
                        }}
                        errorStyle={{
                            height: 0,
                        }}
                        onChangeText={(text) => {
                            handleChance(text, "titulo");
                        }}
                    />
                    <Text style={styles.tituloInput}>Descrição: </Text>
                    <Input
                        placeholder="Descreva como seria sua ideia ?"
                        inputStyle={{
                            paddingLeft: 10,
                            paddingTop: 2,
                            backgroundColor: "#fff",
                            borderRadius: 4,
                            justifyContent: "center",
                            marginRight: 8,
                        }}
                        containerStyle={{
                            justifyContent: "center",
                        }}
                        multiline={true}
                        numberOfLines={6}
                        maxLength={150}
                        errorStyle={{
                            height: 0,
                        }}
                        onChangeText={(text) => {
                            handleChance(text, "desc");
                        }}
                    />
                    <Text style={styles.tituloInput}>
                        Benefícios ou Malefícios:{" "}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.textRadio}>Benefício:</Text>
                        <RadioButton
                            value="Benefício"
                            color="#D16E0B"
                            onPress={() => setChecked("Benefício")}
                            status={
                                checked === "Benefício"
                                    ? "checked"
                                    : "unchecked"
                            }
                        />
                        <Text style={styles.textRadio}>Malefício:</Text>
                        <RadioButton
                            value="Malefício"
                            color="#D16E0B"
                            onPress={() => setChecked("Malefício")}
                            status={
                                checked === "Malefício"
                                    ? "checked"
                                    : "unchecked"
                            }
                        />
                    </View>

                    <Text style={styles.tituloInput}>Tema: </Text>
                    <Picker
                        selectedValue={ideia.tema}
                        onValueChange={(itemValue) =>
                            handleChance(itemValue, "tema")
                        }
                        style={{
                            height: 40,
                            width: 345,
                            marginLeft: 8,
                            backgroundColor: "#fff",
                        }}
                    >
                        <Picker.Item
                            label="Selecione o tema abordado"
                            value="Tema Padrão"
                        />
                        <Picker.Item
                            label="Recursos Humanos"
                            value="Recursos Humanos"
                        />
                        <Picker.Item label="TI" value="TI" />
                        <Picker.Item
                            label="Administração"
                            value="Administração"
                        />
                        <Picker.Item label="Finanças" value="Finanças" />
                    </Picker>

                    <Text style={{ ...styles.tituloInput, marginTop: 10 }}>
                        Essa ideia se enquandra no contexto atual da empresa
                        (Home office) ?{" "}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginRight: 14,
                            marginLeft: 14,
                        }}
                    >
                        <Text style={{ fontSize: 11, color: "white" }}>
                            Laranja (não) / Verde (sim)
                        </Text>
                        <Switch
                            trackColor={{ false: "white", true: "white" }}
                            thumbColor={isEnabled ? "#1281AB" : "#E37B09"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    <View style={styles.botaoContainer}>
                        <TouchableOpacity
                            onPress={addIdeia}
                            style={{
                                ...styles.botaoSalveCancel,
                                backgroundColor: "#1281AB",
                            }}
                        >
                            <Text style={styles.textBotaoSalveCancel}>
                                Salvar
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={closeIdeiaModal}
                            style={{
                                ...styles.botaoSalveCancel,
                                marginVertical: 0,
                                position: "absolute",
                                right: 30,
                                backgroundColor: "red",
                            }}
                        >
                            <Text style={styles.textBotaoSalveCancel}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <StatusBar style="light" />
                </ImageBackground>
            </Modal>
        </View>
    );
};

export default AddIdeias;

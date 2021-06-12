import React, { useState, useEffect, useContext } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Header } from "react-native-elements";
import { styles } from "../style/style";
import AddIdeias from "../components/Ideias/AddIdeias";
import EditIdeias from "../components/Ideias/EditIdeias";
import DeletIdeias from "../components/Ideias/DeletIdeias";
import IdeiaService from "../../services/IdeiaService";
import { IdeiaContext, IdeiasContext } from "../components/Ideias/IdeiaContext";

function ListaIdeia({ navigation }) {
    const [isAddIdeiaModalOpen, setIsAddIdeiaModalOpen] = useState(false);
    const [isEditIdeiaModalOpen, setIsEditIdeiaModalOpen] = useState(false);
    const [isDeletIdeiaModalOpen, setIsDeletIdeiaModalOpen] = useState(false);
    const [ideias, setIdeias] = useContext(IdeiasContext);
    const [msgErro, setMsgErro] = useState("");
    const [ideia, setIdeia] = useContext(IdeiaContext);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setMsgErro("");
        IdeiaService.getAll()
            .then((res) => {
                setIdeias(res.data);
            })
            .catch((er) => {
                setMsgErro("Erro de conexão com API.");
            });
    };

    const toggleAddIdeia = () => {
        setIsAddIdeiaModalOpen(!isAddIdeiaModalOpen);
    };

    const toggleEditIdeia = () => {
        setIsEditIdeiaModalOpen(!isEditIdeiaModalOpen);
    };

    const toggleDeletIdeia = () => {
        setIsDeletIdeiaModalOpen(!isDeletIdeiaModalOpen);
    };

    const adicionarIdea = (data) => {
        setIdeias([...ideias, data]);
    };

    useEffect(() => {
        setIdeias(ideias.map((idea) => (idea.id == ideia.id ? ideia : idea)));
    }, [ideia]);

    const deletIdeia = (id) => {
        setIdeias(ideias.filter((idea) => idea.id !== id));
    };

    return (
        <>
            <Header
                containerStyle={{ height: 80, backgroundColor: "#1D1D1D" }}
                leftComponent={{
                    icon: "menu",
                    color: "#E37B09",
                    onPress: navigation.openDrawer,
                    size: 40,
                }}
                centerComponent={{
                    text: "Suas ideias",
                    style: styles.headerText,
                }}
                rightComponent={{
                    icon: "home",
                    color: "#E37B09",
                    size: 40,
                    onPress: () => navigation.navigate("Inicio"),
                }}
            />
            <ScrollView>
                <ImageBackground
                    source={require("../images/fundo1.png")}
                    style={styles.bgImage}
                >
                    <View style={styles.container}>
                        <TouchableOpacity
                            onPress={toggleAddIdeia}
                            style={styles.botaoaddIdeia}
                        >
                            <Ionicons name="ios-add" size={50} color="#FFF" />
                        </TouchableOpacity>

                        {ideias.map((data, index) => (
                            <View style={styles.lista} key={index}>
                                <Text style={styles.tituloIdeia}>
                                    {data.titulo}
                                </Text>
                                <Text style={styles.descIdeia}>
                                    {data.desc}
                                </Text>

                                <View style={styles.acoesLista}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            toggleEditIdeia();
                                            setIdeia(data);
                                        }}
                                    >
                                        <MaterialIcons
                                            name="edit"
                                            size={32}
                                            color="#E37B09"
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            toggleDeletIdeia();
                                            setIdeia(data);
                                        }}
                                    >
                                        <MaterialIcons
                                            name="delete-forever"
                                            size={32}
                                            color="red"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}

                        {isAddIdeiaModalOpen ? (
                            <AddIdeias
                                openIdeiaModal={isAddIdeiaModalOpen}
                                closeIdeiaModal={toggleAddIdeia}
                                addIdeia={adicionarIdea}
                            />
                        ) : null}

                        {isEditIdeiaModalOpen ? (
                            <EditIdeias
                                openIdeiaModal={isEditIdeiaModalOpen}
                                closeIdeiaModal={toggleEditIdeia}
                            />
                        ) : null}

                        {isDeletIdeiaModalOpen ? (
                            <DeletIdeias
                                openIdeiaModal={isDeletIdeiaModalOpen}
                                closeIdeiaModal={toggleDeletIdeia}
                                deletIdeia={deletIdeia}
                            />
                        ) : null}
                    </View>
                    <StatusBar style="light" />
                </ImageBackground>
            </ScrollView>
        </>
    );
}
export default ListaIdeia;

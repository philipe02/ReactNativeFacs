import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Header } from "react-native-elements";
import { styles } from "../style/style";
import AddIdeias from "../components/Ideias/AddIdeias";
import EditIdeias from "../components/Ideias/EditIdeias";
import DeletIdeias from "../components/Ideias/DeletIdeias";

function ListaIdeia({ navigation }) {
  const [isAddIdeiaModalOpen, setIsAddIdeiaModalOpen] = useState(false);
  const [isEditIdeiaModalOpen, setIsEditIdeiaModalOpen] = useState(false);
  const [isDeletIdeiaModalOpen, setIsDeletIdeiaModalOpen] = useState(false);
  const [ideias, setIdeias] = useState([]);
  const [usuarioAtual, setUsuarioAtual] = useState({});
  const [selectedIdeia, setSelectedIdeia] = useState(false);

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
    try {
      let idNovaIdeia = ideias[ideias.length - 1].id + 1;
      data = { id: idNovaIdeia, userId: usuarioAtual.id, ...data };
      setIdeias([...ideias, data]);
    } catch {
      data = { id: 1, userId: usuarioAtual.id, ...data };
      setIdeias([...ideias, data]);
    }
  };

  const editIdeia = (data) => {
    setIdeias(ideias.map((idea) => (idea.id == data.id ? data : idea)));
  };

  const deletIdeia = (id) => {
    setIdeias(ideias.filter((idea) => idea.id !== id));
  };

  //vai retornar as ideas que já estão salvas
  useEffect(() => {
    async function carregaIdeias() {
      const ideiaStorage = await AsyncStorage.getItem("@idea");
      if (ideiaStorage) {
        setIdeias(JSON.parse(ideiaStorage));
      }
    }
    async function carregaUsuarioAtual() {
      const usuarioAtualStorage = await AsyncStorage.getItem("@usuarioAtual");
      if (usuarioAtualStorage) {
        setUsuarioAtual(JSON.parse(usuarioAtualStorage));
      }
    }
    carregaUsuarioAtual();
    carregaIdeias();
  }, []);

  //vai monitorar e atualizar a função carregaIdeias a cada ação, seja de excluir, editar ou add
  useEffect(() => {
    async function salveIdeia() {
      await AsyncStorage.setItem("@idea", JSON.stringify(ideias));
    }
    salveIdeia();
  }, [ideias]);

  return (
    <>
      <ImageBackground
        source={require("../images/fundo1.png")}
        style={styles.bgImage}
      >
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
            onPress: () => navigation.navigate("Feed"),
          }}
        />
        <TouchableOpacity onPress={toggleAddIdeia} style={styles.botaoaddIdeia}>
          <Ionicons name="ios-add" size={50} color="#E37B09" />
        </TouchableOpacity>
        <ScrollView>
          <View style={styles.container}>
            {ideias.map((data, index) => (
              <View style={styles.lista} key={index}>
                <Text style={styles.tituloIdeia}>{data.titulo}</Text>
                <Text style={styles.descIdeia}>{data.desc}</Text>

                <View style={styles.acoesLista}>
                  <TouchableOpacity
                    onPress={() => {
                      toggleEditIdeia();
                      setSelectedIdeia(data);
                    }}
                  >
                    <MaterialIcons name="edit" size={32} color="#E37B09" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      toggleDeletIdeia();
                      setSelectedIdeia(data);
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
                adicionarIdeia={adicionarIdea}
              />
            ) : null}

            {isEditIdeiaModalOpen ? (
              <EditIdeias
                openIdeiaModal={isEditIdeiaModalOpen}
                closeIdeiaModal={toggleEditIdeia}
                selectedIdeia={selectedIdeia}
                editIdeia={editIdeia}
              />
            ) : null}

            {isDeletIdeiaModalOpen ? (
              <DeletIdeias
                openIdeiaModal={isDeletIdeiaModalOpen}
                closeIdeiaModal={toggleDeletIdeia}
                selectedIdeia={selectedIdeia}
                deletIdeia={deletIdeia}
              />
            ) : null}
          </View>
          <StatusBar style="light" />
        </ScrollView>
      </ImageBackground>
    </>
  );
}
export default ListaIdeia;

import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Header, Icon, Button } from "react-native-elements";
import { styles } from "../style/style";
import AddIdeias from "../components/AddIdeias";
import EditIdeias from "../components/EditIdeias";
import DeletIdeias from "../components/DeletIdeias";
import { useDispatch, useSelector } from "react-redux";
import { ideiaAdicionada, ideiaEditada, ideiaExcluida } from "../redux/actions";
import { salveIdeia } from "../storage/storage";
import { useFocusEffect } from "@react-navigation/core";

function Ideias({ navigation }) {
  const [isAddIdeiaModalOpen, setIsAddIdeiaModalOpen] = useState(false);
  const [isEditIdeiaModalOpen, setIsEditIdeiaModalOpen] = useState(false);
  const [isDeletIdeiaModalOpen, setIsDeletIdeiaModalOpen] = useState(false);

  const [ideias, setIdeias] = useState();
  const [usuarioAtual, setUsuarioAtual] = useState({});
  const [selectedIdeia, setSelectedIdeia] = useState(false);

  //const { ideias } = useSelector((state) => state.IdeiasReducer);
  const dispatch = useDispatch();

  const toggleAddIdeia = () => {
    setIsAddIdeiaModalOpen(!isAddIdeiaModalOpen);
  };

  const toggleEditIdeia = () => {
    setIsEditIdeiaModalOpen(!isEditIdeiaModalOpen);
  };

  const toggleDeletIdeia = () => {
    setIsDeletIdeiaModalOpen(!isDeletIdeiaModalOpen);
  };

  const adicionarIdea = (ideiaNova) => {
    let listaIdeias = ideias;
    try {
      let idNovaIdeia = listaIdeias[listaIdeias.length - 1].id + 1;
      ideiaNova = { id: idNovaIdeia, userKey: usuarioAtual.key, ...ideiaNova };
      setIdeias([...listaIdeias, ideiaNova]);
    } catch {
      ideiaNova = { id: 1, userKey: usuarioAtual.key, ...ideiaNova };
      setIdeias([...listaIdeias, ideiaNova]);
    }
  };

  const editIdeia = (ideiaEditada) => {
    let listaIdeia = ideias;
    listaIdeia = listaIdeia.map((ideia) =>
      ideia.id === ideiaEditada.id ? ideiaEditada : ideia
    );
    console.warn(listaIdeia);
    setIdeias(listaIdeia);
  };

  const deletIdeia = (idIdeiaExcluida) => {
    let listaIdeia = ideias;
    listaIdeia = listaIdeia.filter((ideia) => ideia.id !== idIdeiaExcluida);
    console.warn(listaIdeia);
    setIdeias(listaIdeia);
  };

  useFocusEffect(
    useCallback(() => {
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
    }, [])
  );
  useEffect(() => {
    ideias !== undefined ? salveIdeia(ideias) : null;
  }, [ideias]);

  //vai monitorar e atualizar a função carregaIdeias a cada ação, seja de excluir, editar ou add
  /*
  useEffect(() => {
    async function salveIdeia() {
      await AsyncStorage.setItem("@idea", JSON.stringify(ideias));
    }

    salveIdeia();
  }, [ideias]); */

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
        />

        <TouchableOpacity onPress={toggleAddIdeia} style={styles.botaoaddIdeia}>
          <Icon name="plus" type="antdesign" size={50} color="#E37B09" />
        </TouchableOpacity>
        <ScrollView>
          <View style={styles.container}>
            <Button title="ideias" onPress={() => console.warn(ideias)} />
            {ideias !== undefined
              ? ideias.map((data, index) => (
                  <View style={styles.lista} key={data.id}>
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
                ))
              : null}

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
export default Ideias;

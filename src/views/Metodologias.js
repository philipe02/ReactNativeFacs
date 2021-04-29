import React, { useState, useEffect } from "react";
import { styles } from "../style/style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { ListItem, Button, Icon, Header } from "react-native-elements";

import { Searchbar } from "react-native-paper";

import ListaMetodologia from "../components/metodologias/ListaMetodologia";
import AdicionarMetodologia from "../components/metodologias/AdicionarMetodologia";
import EditarMetodologia from "../components/metodologias/EditarMetodologia";
import DeletarMetodologia from "../components/metodologias/DeletarMetodologia";
import { StatusBar } from "expo-status-bar";

const Metodologias = ({ navigation }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedMetodologia, setSelectedMetodologia] = useState([]);

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(ListaMetodologia);
  const [metodologia, setMetodologia] = useState(ListaMetodologia);

  const searchFilterFunction = (text) => {
    if (text) {
      const data = metodologia.filter(function (item) {
        const itemData = item.area ? item.area.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFiltered(data);
      setSearch(text);
    } else {
      setFiltered(metodologia);
      setSearch(text);
    }
  };

  const toggleDetalhesMetodologia = () => setModalVisible(!modalVisible);
  const toggleAdicionarMetodologia = () => setIsAddModalOpen(!isAddModalOpen);
  const toggleEditarMetodologia = () =>
    setIsUpdateModalOpen(!isUpdateModalOpen);
  const toggleDeletarMetodologia = () =>
    setIsDeleteModalOpen(!isDeleteModalOpen);

  const adicionarMetodologia = (data) => {
    try {
      let idNovaMetodologia = metodologia[metodologia.length - 1].id + 1;
      data = { id: idNovaMetodologia, ...data };
      setFiltered([...filtered, data]);
      setMetodologia([...metodologia, data]);
    } catch {
      data = { id: 1, ...data };
      setFiltered([...filtered, data]);
      setMetodologia([...metodologia, data]);
    }
  };

  const editarMetodologia = (data) => {
    setFiltered(filtered.map((com) => (com.id == data.id ? data : com)));
    setMetodologia(metodologia.map((com) => (com.id == data.id ? data : com)));
  };

  const deletarMetodologia = (data) => {
    setFiltered(filtered.filter((com) => com.id !== data));
    setMetodologia(metodologia.filter((com) => com.id !== data));
  };

  useEffect(() => {
    async function CarregarMetodologia() {
      const methodStorage = await AsyncStorage.getItem("@metodologia");
      if (methodStorage) setMetodologia(JSON.parse(methodStorage));
    }

    CarregarMetodologia();
  }, []);

  useEffect(() => {
    async function SalvarMetodologia() {
      await AsyncStorage.setItem("@metodologia", JSON.stringify(metodologia));
    }
  }, [metodologia]);

  function getActions(data) {
    return (
      <View style={styles.groupButton}>
        <Button
          type="clear"
          style={{ marginHorizontal: 40 }}
          icon={<Icon name="edit" size={30} color="#1281AB" />}
          onPress={() => {
            toggleEditarMetodologia();
            setSelectedMetodologia(data);
          }}
        />

        <Button
          type="clear"
          style={{ marginHorizontal: 40 }}
          icon={<Icon name="delete" size={30} color="#E76F51" />}
          onPress={() => {
            toggleDeletarMetodologia();
            setSelectedMetodologia(data);
          }}
        />
      </View>
    );
  }

  function renderDataItems({ item: data }) {
    return (
      <ListItem
        bottomDivider
        key={data.id}
        onPress={() => {
          setModalVisible(true);
          setSelectedMetodologia(data);
        }}
      >
        <ListItem.Content>
          <ListItem.Title style={styles.titleList}>{data.title}</ListItem.Title>
          <ListItem.Subtitle style={styles.textList}>
            {data.area}
          </ListItem.Subtitle>
        </ListItem.Content>

        {getActions(data)}
      </ListItem>
    );
  }

  return (
    <>
      <Header
        containerStyle={{
          height: 80,
          backgroundColor: "#1D1D1D",
        }}
        leftComponent={{
          size: 35,
          icon: "menu",
          color: "#D16E0B",
          onPress: navigation.openDrawer,
        }}
        centerComponent={{
          text: "Metodologias",
          style: styles.headerText,
        }}
        rightComponent={{
          size: 35,
          icon: "add",
          color: "#D16E0B",
          onPress: () => toggleAdicionarMetodologia(),
        }}
      />

      <View style={styles.body}>
        <ImageBackground
          source={require("../images/fundo1.png")}
          style={styles.bg}
        >
          <View style={styles.containerFeed}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.title}>Materiais para estudo</Text>
            </View>

            <Searchbar
              value={search}
              autoCorrect={false}
              style={{ width: 335, marginBottom: 10 }}
              placeholder="Filtrar por área de estudo..."
              onClear={(text) => searchFilterFunction("")}
              onChangeText={(text) => searchFilterFunction(text)}
            />

            <FlatList
              data={filtered}
              renderItem={renderDataItems}
              keyExtractor={(method) => method.id.toString()}
            />

            <Modal
              transparent
              animationType="slide"
              visible={modalVisible}
              onRequestClose={toggleDetalhesMetodologia}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={{ marginLeft: 15 }}>
                    <Text style={styles.title}>Detalhes do Material</Text>
                  </View>

                  <ScrollView>
                    {
                      <View
                        key={selectedMetodologia.id}
                        style={styles.listModal}
                      >
                        <View style={styles.listDetails}>
                          <Text style={styles.listDetailsStrong}>Título: </Text>
                          <Text style={styles.listDetailsText}>
                            {selectedMetodologia.title}
                          </Text>
                        </View>

                        <View style={styles.listDetails}>
                          <Text style={styles.listDetailsStrong}>
                            Área de Estudo:{" "}
                          </Text>
                          <Text style={styles.listDetailsText}>
                            {selectedMetodologia.area}
                          </Text>
                        </View>

                        <View style={styles.listDetails}>
                          <Text style={styles.listDetailsStrong}>
                            Definição:{" "}
                          </Text>
                          <Text style={styles.listDetailsText}>
                            {selectedMetodologia.definition}
                          </Text>
                        </View>

                        <View style={styles.listDetails}>
                          <Text style={styles.listDetailsStrong}>
                            Informações adicionais:{" "}
                          </Text>
                          <Text style={styles.listDetailsText}>
                            {selectedMetodologia.description}
                          </Text>
                        </View>

                        <View style={styles.listDetails}>
                          <Text style={styles.listDetailsStrong}>
                            Objetivo:{" "}
                          </Text>
                          <Text style={styles.listDetailsText}>
                            {selectedMetodologia.objective}
                          </Text>
                        </View>

                        <View style={styles.listDetails}>
                          <Text style={styles.listDetailsStrong}>
                            Esse material é autoral?{" "}
                          </Text>
                          <Text style={styles.listDetailsText}>
                            {selectedMetodologia.references}
                          </Text>
                        </View>
                      </View>
                    }
                  </ScrollView>

                  <View
                    style={{
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        ...styles.button,
                        backgroundColor: "#1281AB",
                        marginLeft: 15,
                      }}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Text style={styles.btnText}>Fechar janela</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>

            {isAddModalOpen ? (
              <AdicionarMetodologia
                isOpen={isAddModalOpen}
                isClose={toggleAdicionarMetodologia}
                adicionarMetodologia={adicionarMetodologia}
              />
            ) : null}

            {isUpdateModalOpen ? (
              <EditarMetodologia
                isOpen={isUpdateModalOpen}
                isClose={toggleEditarMetodologia}
                editarMetodologia={editarMetodologia}
                selectedMetodologia={selectedMetodologia}
              />
            ) : null}

            {isDeleteModalOpen ? (
              <DeletarMetodologia
                isOpen={isDeleteModalOpen}
                isClose={toggleDeletarMetodologia}
                deletarMetodologia={deletarMetodologia}
                selectedMetodologia={selectedMetodologia}
              />
            ) : null}
          </View>
        </ImageBackground>
      </View>
      <StatusBar style="light" />
    </>
  );
};

export default Metodologias;

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, ImageBackground, FlatList, TouchableOpacity, Text, Modal, ScrollView } from "react-native";
import { Header, ListItem, Avatar } from "react-native-elements";
import { styles } from "../style/style";
import ranks from "../data/rankingIdeias";

const RankingIdeias = ({ navigation }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ranking, setRanking] = useState(ranks);
  const [selectedIdeia, setSelectedIdeia] = useState([]);

  const countVoto = (data) => {
    let novoVoto = data.voto + 1;
    novoRanking = ranking.map((ideia) =>
      ideia.id === data.id ? { ...ideia, voto: novoVoto } : ideia
    );
    setSelectedIdeia({ ...data, voto: novoVoto });
    setRanking(novoRanking);
  };

  const getListIdeias = ({ item: rank }) => {
    return (
      <ListItem bottomDivider key={rank.id}>
        <Avatar size="medium" rounded source={rank.thumb} />
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: "700" }}>
            {rank.nome}
          </ListItem.Title>
          <ListItem.Subtitle style={{ color: "black" }}>
            {rank.titulo}
          </ListItem.Subtitle>
          <Text style={{ marginTop: 10, fontWeight: "700" }}>
            {" "}
            Quantidade de votos: {rank.voto}{" "}
          </Text>
        </ListItem.Content>
        <TouchableOpacity
          style={styles.botaoVoto}
          onPress={() => {
            setModalIsOpen(true);
            setSelectedIdeia(rank);
          }}
        >
          <Text style={{ textAlign: "center", color: "#FFFFFF" }}>Vote</Text>
        </TouchableOpacity>
      </ListItem>
    );
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
          text: "Ranking Ideias",
          style: styles.headerText,
        }}
        rightComponent={{
          icon: "home",
          color: "#E37B09",
          size: 40,
          onPress: () => navigation.navigate("Feed"),
        }}
      />
      <ImageBackground
        source={require("../images/fundo1.png")}
        style={styles.bgImage}
      >
        <FlatList
          keyExtractor={(rank) => rank.id.toString()}
          data={ranking}
          renderItem={getListIdeias}
        />

        <ScrollView>
          <Modal
            transparent={false}
            animationType="slide"
            visible={modalIsOpen}
            onRequestClose={setModalIsOpen}
          >
            <Header
              containerStyle={{ height: 50, backgroundColor: "#1D1D1D" }}
              centerComponent={{
                text: "Ideia",
                style: styles.headerText,
              }}
              leftComponent={{
                icon: "arrow-left",
                color: "#E37B09",
                onPress: () => setModalIsOpen(false),
                size: 40,
              }}
            />
            <ImageBackground
              source={require("../images/fundo1.png")}
              style={styles.bgImage}
            >
              <View style={styles.modalRank} key={selectedIdeia.id}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.textoRank}>Titulo da ideia: </Text>
                  <Text style={styles.dadosRank}>{selectedIdeia.titulo}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.textoRank}>Nome do idealizador: </Text>
                  <Text style={styles.dadosRank}>{selectedIdeia.nome}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.textoRank}>Descrição: </Text>
                  <Text style={{ ...styles.dadosRank, width: 240 }}>
                    {selectedIdeia.desc}
                  </Text>
                </View>
                <View style={styles.viewBotao}>
                  <TouchableOpacity
                    style={styles.botaoRank}
                    onPress={() => countVoto(selectedIdeia)}
                  >
                    <Text style={styles.textoBotaoRank}> VOTE </Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.dadosRank}>Quantidade de votos: </Text>
                  <Text
                    style={{
                      ...styles.dadosRank,
                      color: "#127289",
                      fontWeight: "700",
                    }}
                  >
                    {selectedIdeia.voto}
                  </Text>
                </View>
              </View>
              <StatusBar style="light" />
            </ImageBackground>
          </Modal>
        </ScrollView>
      </ImageBackground>
      <StatusBar style="light" />
    </>
  );
};

export default RankingIdeias;

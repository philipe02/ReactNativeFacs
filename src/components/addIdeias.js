import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { View, Text, ImageBackground, TouchableOpacity, Modal, ScrollView } from "react-native";
import { styles } from "../style/style";
import { Header } from "react-native-elements";
import { Input } from "react-native-elements"
import {Picker} from '@react-native-picker/picker';

const AddIdeias = (props) => {

  const initialIdeiasState = {
    titulo:"",
    desc: "", 
    setor: "Selecione um setor", 
    tema: "Selecione o tema abordado", 
    benefMalef: ""
  }

  const [ideia, setIdeia] = useState(initialIdeiasState)
  const { openIdeiaModal, closeIdeiaModal } = props

  const handleChance = (value, name) => {
    setIdeia({...ideia, [name]: value})
  }

  const addIdeia = async () => {
    props.addIdeia(ideia) 
    props.closeIdeiaModal();
  }

    return (
        <ScrollView>
            <View style={styles.container}>
              <Modal 
                animationType="fase" 
                transparent={false} 
                visible={openIdeiaModal}
                onRequestClose={closeIdeiaModal}  
              >
                <Header
                  containerStyle={{ height: 60, backgroundColor: "#1D1D1D" }}
                  centerComponent={{
                    text: "Suas ideias",
                    style: styles.headerText,
                  }}
                />
                <ImageBackground source={require('../images/fundo1.png')} style={styles.bgImage}>            
                <Text style={styles.tituloInput}>Título: </Text>
                <Input
                  placeholder="Como você chama essa ideia ?"
                  inputStyle={{
                    paddingLeft:10, 
                    paddingTop:2,
                    backgroundColor:'#fff',
                    borderRadius:4,
                    margin:2, 
                  }}
                  containerStyle={{
                    justifyContent:'center',
                  }}
                  errorStyle={{
                    height:0
                  }}
                  onChangeText={(text) => {handleChance(text, "titulo")}}
                />
                <Text style={styles.tituloInput}>Descrição: </Text>
                <Input
                  placeholder="Descreva como seria sua ideia ?"
                  inputStyle={{
                    paddingLeft:10, 
                    paddingTop:2,
                    backgroundColor:'#fff',
                    borderRadius:4,
                    justifyContent:'center',
                    margin:2
                  }}
                  containerStyle={{
                    justifyContent:'center',
                  }}
                  multiline={true}
                  numberOfLines={4}
                  maxLength={150}
                  errorStyle={{
                    height:0
                  }}
                  onChangeText={(text) => {handleChance(text, "desc")}}
                />

                <Text style={styles.tituloInput}>Benefícios/Malefícios: </Text>
                <Input
                  placeholder="Quais seriam os benefícios/malefícos que essa ideia pode resolver/trazer?"
                  inputStyle={{
                    paddingLeft:10, 
                    paddingTop:2,
                    backgroundColor:'#fff',
                    borderRadius:4,
                    margin:2
                  }}
                  containerStyle={{
                    justifyContent:'center',
                  }}
                  multiline={true}
                  numberOfLines={5}
                  maxLength={200}
                  errorStyle={{
                    height:0
                  }}
                  onChangeText={(text) => {handleChance(text, "benefMalef")}}
                />

                <Text style={styles.tituloInput}>Tema: </Text>
                <Picker
                  selectedValue={ideia.tema}
                  onValueChange={(itemValue) => handleChance(itemValue, "tema")}
                  style={{ height: 40, width: 345, marginLeft:8, backgroundColor:'#fff'}}
                >
                  <Picker.Item label="Selecione o tema abordado" value="temaPadrao"/>
                  <Picker.Item label="Recursos Humanos" value="recursoshumanos"/>
                  <Picker.Item label="TI" value="TI"/>
                  <Picker.Item label="Administração" value="adm"/>
                  <Picker.Item label="Finanças" value="financas"/>
                </Picker>

                <Text style={styles.tituloInput}>Setor: </Text>
                <Picker
                  selectedValue={ideia.setor}
                  onValueChange={(itemValue) => handleChance(itemValue, "setor")}
                  style={{ height: 40, width: 345, marginLeft:8, backgroundColor:'#fff'}}
                >
                  <Picker.Item label="Selecione um setor" value="setorPadrao" />
                  <Picker.Item label="Área de Pessoas" value="pessoas"/>
                  <Picker.Item label="Tecnologia da informação" value="tinformação"/>
                  <Picker.Item label="Gerência e gestão" value="gestao"/>
                  <Picker.Item label="Contabilidade" value="contabilidade"/>
                </Picker>

                <View>
                  <TouchableOpacity
                    onPress={addIdeia}
                    style={{...styles.botaoAddList, backgroundColor:"#1281AB",}}
                  >
                    <Text style={styles.textBotaoAddList}>Salvar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                  onPress={closeIdeiaModal}
                  style={{...styles.botaoAddList, marginVertical: 0, position:'absolute', right: 20, backgroundColor: "#E76F51"}}
                  >
                    <Text style={styles.textBotaoAddList}>Cancelar</Text>
                  </TouchableOpacity>              
                </View>
                </ImageBackground>
              </Modal>  
            </View>

            <StatusBar style="light" />
        </ScrollView>

    );
};
  
export default AddIdeias;

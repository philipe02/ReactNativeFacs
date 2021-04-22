import { StatusBar } from "expo-status-bar";
import React, {useState, useEffect} from "react";
import { View, Text, ImageBackground, TouchableOpacity, Modal, Alert} from "react-native";
import { styles } from "../../style/style";
import { Header, Input  } from "react-native-elements";
import {Picker} from '@react-native-picker/picker';

const EditIdeias = (props) => {

  const initialIdeiasState = {
    titulo:"",
    desc: "", 
    setor: "Selecione um setor", 
    tema: "Selecione um tema", 
    benefMalef: ""
  }

  const [ideia, setIdeia] = useState(initialIdeiasState)
  const { openIdeiaModal, closeIdeiaModal } = props

  useEffect(() => {
    const data = {
        id: props.selectedIdeia.id,
        titulo: props.selectedIdeia.titulo,
        desc: props.selectedIdeia.desc,
        setor: props.selectedIdeia.setor,
        tema: props.selectedIdeia.tema,
        benefMalef: props.selectedIdeia.benefMalef
      };
    setIdeia(data)
}, [])

  const handleChance = (value, name) => {
    setIdeia({...ideia, [name]: value})
  }

  const editIdeia = () => {
    if(!ideia.titulo || ideia.titulo === "")
      Alert.alert("Título Obrigatório.")
    else if(!ideia.desc || ideia.desc === "")
      Alert.alert("Descrição Obrigatória.")
    else if(!ideia.benefMalef || ideia.benefMalef === "")
      Alert.alert("Descreva pelo menos um malefício/benefício.")
    else if(ideia.tema === "Selecione um tema")
      Alert.alert("Selecione o tema abordado.")
    else if(ideia.setor === "Selecione um setor")
      Alert.alert("Selecione o setor ao qual sua ideia se relaciona.")
    else{
      props.editIdeia({
        id: ideia.id,
        titulo: ideia.titulo,
        desc: ideia.desc,
        setor: ideia.setor,
        tema: ideia.tema,
        benefMalef: ideia.benefMalef
      })
      props.closeIdeiaModal();      
    }
  }

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
                    text: "Editar Ideia",
                    style: styles.headerText,
                  }}
                />
                <ImageBackground source={require('../../images/fundo1.png')} style={styles.bgImage}>            
                <Text style={styles.tituloInput}>Título: </Text>
                <Input
                  placeholder="Titulo Ideia"
                  inputStyle={{
                    paddingLeft:10, 
                    paddingTop:2,
                    backgroundColor:'#fff',
                    borderRadius:4,
                    marginRight:8
                  }}
                  containerStyle={{
                    justifyContent:'center',
                  }}
                  errorStyle={{
                    height:0
                  }}
                  onChangeText={(text) => {handleChance(text, "titulo")}}
                  value={ideia.titulo}
                />
                <Text style={styles.tituloInput}>Descrição: </Text>
                <Input
                  placeholder="Descrição..."
                  inputStyle={{
                    paddingLeft:10, 
                    paddingTop:2,
                    backgroundColor:'#fff',
                    borderRadius:4,
                    justifyContent:'center',
                    marginRight:8
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
                  value={ideia.desc}
                  onChangeText={(text) => {handleChance(text, "desc")}}
                />

                <Text style={styles.tituloInput}>Benefícios/Malefícios: </Text>
                <Input
                  placeholder="Benefícios/malefícos"
                  inputStyle={{
                    paddingLeft:10, 
                    paddingTop:2,
                    backgroundColor:'#fff',
                    borderRadius:4,
                    marginRight:8
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
                  value={ideia.benefMalef}
                  onChangeText={(text) => {handleChance(text, "benefMalef")}}
                />

                <Text style={styles.tituloInput}>Tema: </Text>
                <Picker
                  selectedValue={ideia.tema}
                  value={ideia.tema}
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
                  value={ideia.setor}
                  onValueChange={(itemValue) => handleChance(itemValue, "setor")}
                  style={{ height: 40, width: 345, marginLeft:8, backgroundColor:'#fff'}}
                >
                  <Picker.Item label="Selecione um setor" value="setorPadrao" />
                  <Picker.Item label="Área de Pessoas" value="pessoas"/>
                  <Picker.Item label="Tecnologia da informação" value="tinformação"/>
                  <Picker.Item label="Gerência e gestão" value="gestao"/>
                  <Picker.Item label="Contabilidade" value="contabilidade"/>
                </Picker>

                <View style={styles.botaoContainer}>
                  <TouchableOpacity
                    onPress={editIdeia}
                    style={{...styles.botaoSalveCancel, backgroundColor:"#E37B09",}}
                  >
                    <Text style={styles.textBotaoSalveCancel}>Alterar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={closeIdeiaModal}
                    style={{...styles.botaoSalveCancel, marginVertical: 0, position:'absolute', right: 30, backgroundColor: "red"}}
                  >
                    <Text style={styles.textBotaoSalveCancel}>Cancelar</Text>
                  </TouchableOpacity>              
                </View>
                <StatusBar style="light"/>
              </ImageBackground>
            </Modal> 
          </View>
    );
};
  
export default EditIdeias;
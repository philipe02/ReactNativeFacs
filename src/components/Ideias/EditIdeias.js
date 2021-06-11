import { StatusBar } from "expo-status-bar";
import React, {useState, useContext} from "react";
import { View, Text, ImageBackground, TouchableOpacity, Modal, Alert, Switch} from "react-native";
import { styles } from "../../style/style";
import { Header, Input  } from "react-native-elements";
import {Picker} from '@react-native-picker/picker';
import { RadioButton } from "react-native-paper";
import IdeiaService from "../../../services/IdeiaService"
import {IdeiaContext} from "./IdeiaContext"

const EditIdeias = (props) => {

/*   const initialIdeiasState = {
    id:"",
    titulo: "",
    desc: "",
    tema: "Selecione um tema",
    benefMalef: "",
    homeSimNao:""
  } */

  const { openIdeiaModal, closeIdeiaModal } = props
  const [msgErro, setMsgErro] = useState("")
  const [ideia, setIdeia] = useContext(IdeiaContext)

  const handleChance = (value, name) => {
    setIdeia({...ideia, [name]: value})
  }


  const editIdeia = () => {
/*     if(!ideia.titulo || ideia.titulo === "")
      Alert.alert("Título Obrigatório.")
    else if(!ideia.desc || ideia.desc === "")
      Alert.alert("Descrição Obrigatória.")
    else if(ideia.tema === "Selecione um tema")
      Alert.alert("Selecione o tema abordado.")
    else if (!checked){
      Alert.alert("Indique se a ideia resolve um malefício ou traz um benefício.");
    }  */
    const id = ideia.id
    const data = {
      titulo: ideia.titulo,
      desc: ideia.desc,
      tema: ideia.tema,
      benefMalef: ideia.benefMalef, 
      homeSimNao: ideia.homeSimNao 
    }
    IdeiaService.update(id, data)
                .then(resp =>{
                  props.closeIdeiaModal();
                })
                .catch( error => {
                    setMsgErro("Erro de conexão com API.")
                })
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
                  numberOfLines={4}S
                  maxLength={150}
                  errorStyle={{
                    height:0
                  }}
                  value={ideia.desc}
                  onChangeText={(text) => {handleChance(text, "desc")}}
                />

                <Text style={styles.tituloInput}>Benefícios ou Malefícios: </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textRadio}>Benefício:</Text>
                  <RadioButton
                    value='first'
                    color="#D16E0B"
                    onPress={() => {handleChance('Benefício', "benefMalef") }}
                    status={ ideia.benefMalef === 'Benefício' ? 'checked' : 'unchecked' }
                  />
                  <Text style={styles.textRadio}>Malefício:</Text>
                  <RadioButton
                    value='second'
                    color="#D16E0B"
                    onPress={() => {handleChance('Malefício', "benefMalef") }}
                    status={ ideia.benefMalef === 'Malefício' ? 'checked' : 'unchecked' }
                  />
                </View>

                <Text style={styles.tituloInput}>Tema: </Text>
                <Picker
                  selectedValue={ideia.tema}
                  value={ideia.tema}
                  onValueChange={(itemValue) => handleChance(itemValue, "tema")}
                  style={{ height: 40, width: 345, marginLeft:8, backgroundColor:'#fff'}}
                >
                  <Picker.Item label="Selecione o tema abordado" value="temaPadrao"/>
                  <Picker.Item label="Recursos Humanos" value="Recursos Humanos"/>
                  <Picker.Item label="TI" value="TI"/>
                  <Picker.Item label="Administração" value="Administração"/>
                  <Picker.Item label="Finanças" value="Finanças"/>
                </Picker>

                <Text style={{...styles.tituloInput, marginTop:10}}>Essa ideia se enquandra no contexto atual da empresa (Home office) ? </Text>
                  <View style={{flexDirection:"row", justifyContent:'space-between', marginRight:14, marginLeft:14}}>
                    <Text style={{fontSize:10, color:'white'}}>Laranja (não) / Verde (sim)</Text>
                    <Switch
                      trackColor={{ false: "white", true: "white" }}
                      thumbColor={ideia.homeSimNao ? "#1281AB" : "#E37B09"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={() => {handleChance(!ideia.homeSimNao, "homeSimNao") }}
                      value={ideia.homeSimNao}
                    />
                 </View>

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
import { StatusBar } from "expo-status-bar";
import React, {useState, useContext} from "react";
import { View, Text, ImageBackground, TouchableOpacity, Modal} from "react-native";
import { styles } from "../../style/style";
import { Header} from "react-native-elements";
import IdeiaService from "../../../services/IdeiaService"
import {IdeiaContext} from "./IdeiaContext"

const DeletIdeias = (props) => {

  const { openIdeiaModal, closeIdeiaModal} = props;
  const [msgErro, setMsgErro] = useState("")
  const [ideia, setIdeia] = useContext(IdeiaContext)

  const deletIdeia = () => {
    const id = ideia.id
    IdeiaService.remove(id)
                .then( resp => {
                  props.deletIdeia(ideia.id)
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
                    text: "Excluir Ideia",
                    style: styles.headerText,
                  }}
                />
                <ImageBackground source={require('../../images/fundo1.png')} style={styles.bgImage}>
                <View style={styles.containerExclusao}>    
                  <Text style={styles.tituloExclusao}>Deseja excluir a ideia: {ideia.titulo} ? </Text>

                  <View style={styles.botaoContainer}>

                    <TouchableOpacity
                      onPress={deletIdeia}
                      style={{...styles.botaoSalveCancel, marginVertical: 0, position:'absolute', right: 30, backgroundColor: "#127289"}}
                    >
                      <Text style={styles.textBotaoSalveCancel}>OK</Text>
                    </TouchableOpacity>   

                    <TouchableOpacity
                      onPress={closeIdeiaModal}
                      style={{...styles.botaoSalveCancel, backgroundColor:"red"}}
                    >
                      <Text style={styles.textBotaoSalveCancel}>Cancelar</Text>
                    </TouchableOpacity>
                  </View>
                  </View> 

                <StatusBar style="light"/>
              </ImageBackground>
            </Modal> 
          </View>
    );
};
  
export default DeletIdeias;
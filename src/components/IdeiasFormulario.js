import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "../style/style";
import { Input, Button } from "react-native-elements"
import  { Picker }  from '@react-native-picker/picker' ;


const Ideias = ({route, navigation}) => {

    return (
        <View style={styles.body}>
          <ImageBackground source={require('../images/fundo1.png')} style={styles.bgImage}>
            <View style={styles.container}>
              <Text style={styles.tituloInput}>Título: </Text>
              <Input
                placeholder="Como você chama essa ideia ?"

              />
              <Text style={styles.tituloInput}>Descrição: </Text>
              <Input
                placeholder="Descreva como seria sua ideia ?"
                inputStyle={{
                  paddingLeft:10, 
                  paddingTop:2,
                  marginTop:8,
                  backgroundColor:'#fff',
                  borderRadius:4 
                }}
                containerStyle={{
                  justifyContent:'center',
                }}
                multiline={true}
                numberOfLines={4}
              />
{/*               <Picker>
                <Picker.Item label="Selecione um setor" value="1setor" />
                <Picker.Item label="Setor 1" value="2setor"/>
                <Picker.Item label="Setor 2" value="3setor"/>
                <Picker.Item label="Setor 3" value="4setor"/>
                <Picker.Item label="Setor 4" value="5setor"/>
              </Picker> */}
              <Text style={styles.tituloInput}>Benefícios/Malefícios: </Text>
              <Input
                placeholder=" ?"
              />
              <Button title="Salvar" 
              />
            </View>
            <StatusBar style="light" />
          </ImageBackground>
        </View>
    );
};
  
export default Ideias;

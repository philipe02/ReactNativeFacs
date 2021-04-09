import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { View, Text, ImageBackground} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from "../style/style";
import { Input } from "react-native-elements"
import  { Picker }  from '@react-native-picker/picker';
import { TouchableOpacity } from "react-native-gesture-handler";
import {Icon} from 'react-native-elements'

const Ideias = ({route, navigation}) => {

  const initialFormState = {
    titulo:"",
    desc: "", 
    setor: "Selecione um setor", 
    tema: "Selecione o tema abordado", 
    benefMalef: ""
  }
    
  const [form, setForm] = useState(initialFormState)
  
  const handleChance = (value, name) => {
    setForm({...form, [name]: value})
  }

    return (
        <KeyboardAwareScrollView>
          <ImageBackground source={require('../images/fundo1.png')} style={styles.bgImage}>
            <View style={styles.container}>

              <Text style={styles.tituloInput}>Título: </Text>
              <Input
                placeholder="Como você chama essa ideia ?"
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
                placeholder="Quais seriam os benefícios/malefícos que essa ideia pode resolver?"
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
                selectedValue={form.tema}
                onValueChange={(itemValue) => handleChance(itemValue, "tema")}
                style={{ height: 40, width: 345, backgroundColor:'#fff'}}
              >
                <Picker.Item label="Selecione o tema abordado" value="temaPadrao"/>
                <Picker.Item label="Recursos Humanos" value="Recursos Humanos"/>
                <Picker.Item label="TI" value="TI"/>
                <Picker.Item label="Administração" value="adm"/>
                <Picker.Item label="Finanças" value="financas"/>
              </Picker>

              <Text style={styles.tituloInput}>Setor: </Text>
              <Picker
                selectedValue={form.setor}
                onValueChange={(itemValue) => handleChance(itemValue, "setor")}
                style={{ height: 40, width: 345, backgroundColor:'#fff'}}
                >
                <Picker.Item label="Selecione um setor" value="1setor" />
                <Picker.Item label="Setor 1" value="2setor"/>
                <Picker.Item label="Setor 2" value="3setor"/>
                <Picker.Item label="Setor 3" value="4setor"/>
                <Picker.Item label="Setor 4" value="5setor"/>
              </Picker>

              <TouchableOpacity onPress={() => navigation.navigate("IdeiasLista")}>
                <Icon name="downcircle" type="antdesign" size={40} color="#D16E0B" marginTop={15}/>
              </TouchableOpacity>

            </View>
            <StatusBar style="light" />
          </ImageBackground>
          </KeyboardAwareScrollView>
    );
};
  
export default Ideias;

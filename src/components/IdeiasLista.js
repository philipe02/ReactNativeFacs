import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, ImageBackground, FlatList, Alert, Text } from "react-native";
import { Button, Icon } from "react-native-elements";
import { styles } from "../style/style";
import ideias from './IdeiasFormulario'
import feed from '../views/Feed'



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    desc: "uma descrição bem grandona 1"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    desc: "uma descrição bem grandona 2"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    desc: "uma descrição bem grandona 3, se eu botar o testo maior será que via quebrar a linha e mudar o tamanho do back"
  },
];

function confirmIdeiaDeletion(ideia){
  Alert.alert('Exluir Ideia', 'Deseja exluir essa ideia?',[
      {
          text:"Sim",
          onPress(){
              console.warn('delete '+ ideia.titulo)
          }
      },
      {
          text:"Não"
      }
  ])
}

function getActions(ideias, feed){
  return(
      <>
        <Button
          style={styles.editButton} 
          onPress={() => props.navigation.navigate('IdeiasFormulario', ideias)}
          type="clear"
          icon={<Icon name='edit' size={25} color="#1281AB"/>}
        />
        <Button
          style={styles.deleteButton}
          onPress={() => confirmIdeiaDeletion(ideia)}
          type="clear"
          icon={<Icon name='delete' size={25} color="#D16E0B"/>}
        />
      </>
  )
}

function Item({title, desc}) {
  return (
    <View style={styles.lista}>
      <Text style={styles.tituloLista}>{title}</Text>
      <Text style={styles.descLista}>{desc}</Text>
        {getActions(ideias)}         
    </View>
  );
}

export default props => {

return(
  <ImageBackground source={require('../images/fundo1.png')} style={styles.bgImage}>
    <View style={styles.container}>
    <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} desc={item.desc}/>}
        keyExtractor={item => item.id}
      />
    </View>
  </ImageBackground>
) 

}
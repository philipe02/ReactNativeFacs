//tela vai ter as rotas da telas de Ideias
import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import IdeiasFormulario from '../components/IdeiasFormulario'
import IdeiasLista from '../components/IdeiasLista'
import {Button, Icon} from 'react-native-elements'

const Stack = createStackNavigator()

export default props => {
  return(
      <Stack.Navigator 
        initialRouteName="IdeiasLista"
      >
        <Stack.Screen 
          name="IdeiasLista"
          component={IdeiasLista}
          options={({navigation}) => {
            return {
              title: "Suas Ideias",
              headerStyle: {
                backgroundColor: "#1281AB"
              },
              headerTitleAlign:'center',
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate("IdeiasFormulario")}
                  type="clear"
                  icon={<Icon name="add" size={40} color="#D16E0B"/>}
                />
              ),
              headerLeft: () => (
                <Button 
                  onPress={() => navigation.navigate("Inicio")}
                  type="clear"
                  icon={<Icon name="home" size={40} color="#D16E0B"/>}
                />
              )
            }
          }}
        />
        <Stack.Screen 
         name="IdeiasFormulario"
         component={IdeiasFormulario}
         options={({navigation}) => {
           return {
             title: "Cadastro de Ideias",
             headerStyle: {
               backgroundColor: "#1281AB"
             },
             headerTitleAlign:'center',
             headerLeft: () => (
               <Button 
                 onPress={() => navigation.navigate("IdeiasLista")}
                 type="clear"
                 icon={<Icon name="arrowleft" type="antdesign" size={40} color="#D16E0B"/>}
               />
             )
           }
         }}
        />
    </Stack.Navigator>
  )
}

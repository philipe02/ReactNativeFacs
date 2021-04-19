import React, {useState} from "react";
import {Text, View, TouchableOpacity, ScrollView, ImageBackground} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Header } from "react-native-elements";
import { styles } from "../style/style";
import AddIdeias from '../components/AddIdeias'

function ListaIdeia ({}) {

  const [isAddIdeiaModalOpen, setIsAddIdeiaModalOpen] = useState(false)
  const [ideias, setIdeias] = useState([])

  const toggleAddIdeia = () => {
    setIsAddIdeiaModalOpen(!isAddIdeiaModalOpen)
  }

  const addIdeia = (data) => {
    setIdeias([data, ...ideias])
  }

  return(
    <>
    <Header
      containerStyle={{ height: 80, backgroundColor: "#1D1D1D" }}
      leftComponent={{
        icon: "menu",
        color: "#fff",

        size: 40,
      }}
      centerComponent={{
        text: "Suas ideias",
        style: styles.headerText,
      }}
    />
    <ScrollView>
        <ImageBackground source={require('../images/fundo1.png')} style={styles.bgImage}>
          <View style={styles.container}>

            <TouchableOpacity
              onPress={toggleAddIdeia}
              style={styles.button}
            >
              <Ionicons name="md-add-circle" size={50} color="black" />
            </TouchableOpacity>

            {ideias.map((data, index) => 
              <View style={styles.lista}>
                <Text style={styles.tituloIdeia}>{data.titulo}</Text>
                <Text>{data.desc}</Text>
              </View>  
            )}

              {isAddIdeiaModalOpen ? <AddIdeias 
              isOpen={isAddIdeiaModalOpen}
              closeIdeiaModal={toggleAddIdeia}
              addIdeias={addIdeia}
            /> : null}
          </View>
        </ImageBackground>
    </ScrollView>  
    </>
  )
}
export default ListaIdeia
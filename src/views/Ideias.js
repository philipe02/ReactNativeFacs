import React, {useState} from "react";
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../style/style";
import addIdeias from '../components/addIdeias'

function ListaIdeia ({}) {

  const [isAddIdeiaModalOpen, setsAddIsdeiaModalOpen] = useState(false)
  const [ideias, setIdeias] = useState([])

  const toggleAddIdeia = () => {
    setsAddIsdeiaModalOpen(!isAddIdeiaModalOpen)
  }

  const addIdeia = (data) => {
    setIdeias([data, ...ideias])
  }

  return(
    <KeyboardAwareScrollView>
      <ImageBackground source={require('../images/fundo1.png')} style={styles.bgImage}>
        <View style={styles.container}>
          <Text>Suas ideias</Text>

          <TouchableOpacity
            onPress={toggleAddIdeia}
            style={styles.button}
          >
            <Ionicons name="md-add-circle" size={30} color="black" />
          </TouchableOpacity>

          {ideias.map((data, index) => 
            <View style={styles.lista}>
              <Text style={styles.tituloIdeia}>{data.titulo}</Text>
              <Text>{data.desc}</Text>
            </View>  
          )}

            {isAddIdeiaModalOpen ? <addIdeias 
            isOpen={isAddIdeiaModalOpen}
            closeModal={toggleAddIdeia}
            addIdeias={addIdeia}
          /> : null}
        </View>
  </ImageBackground>
    </KeyboardAwareScrollView>
  )
}
export default ListaIdeia
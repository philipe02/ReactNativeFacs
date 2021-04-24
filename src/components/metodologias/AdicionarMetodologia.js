import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import {View, Text, Modal, TouchableOpacity, TextInput, Picker, ScrollView} from 'react-native';

import { styles } from '../../style/style';

const AdicionarMetodologia = (props) => {

    const initialMetodologiaState = {
        id : 0,
        title : "",
        area: "nulo",
        definition: "",
        description : "",
        objective: ""
    }

    const [metodologia, setMetodologia] = useState(initialMetodologiaState)
    const [checked, setChecked] = React.useState('');
    const { isOpen, isClose } = props

    const handleChange = (value, name) => {
        setMetodologia( {...metodologia, [name] : value} )
    }

    const adicionarMetodologia = async() => {
        props.adicionarMetodologia(metodologia)
        props.isClose()
    }

    return(
        <Modal visible={ isOpen } onRequestClose={ isClose } animationType="slide" transparent>
            <View style={ styles.centeredView }>
                <View style={ styles.modalView }>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={ styles.title }>Adicionar Metodologia</Text>
                    </View>

                    <ScrollView style={ styles.scroll }>
                        <View>
                            <Text style={ styles.label }>Título</Text>
                            <TextInput
                                    style={ styles.input }
                                    placeholder="Informe o título aqui: "
                                    onChangeText={ (text) => handleChange(text, 'title') }
                            />
                        </View>

                        <View>
                            <Text style={ styles.label }>Área</Text>
                            <Picker
                                    style={ styles.input }
                                    selectedValue={ metodologia.area }
                                    onValueChange={(text) => handleChange(text, 'area')}
                            >
                                <Picker.Item label="Selecione a área de estudo" value="nulo"/>
                                <Picker.Item label="Recursos Humanos" value="recursos-humanos"/>
                                <Picker.Item label="Tecnologias" value="tecnologias"/>
                                <Picker.Item label="Administração" value="administracao"/>
                                <Picker.Item label="Organização de projetos" value="organizacao-de-projetos"/>
                            </Picker>
                        </View>

                        <View>
                            <Text style={ styles.label }>Definição</Text>
                            <TextInput
                                    style={ styles.input }
                                    placeholder="Informe a definição aqui: "
                                    onChangeText={ (text) => handleChange(text, 'definition') }
                            />
                        </View>

                        <View>
                            <Text style={ styles.label }>Objetivo</Text>
                            <TextInput
                                    style={ styles.input }
                                    placeholder="Informe o objetivo aqui: "
                                    onChangeText={ (text) => handleChange(text, 'objective') }
                            />
                        </View>

                        <View>
                            <Text style={ styles.label }>Informações adicionais</Text>
                            <TextInput
                                    style={ styles.input }
                                    placeholder="Informe as informações adicionais aqui: "
                                    onChangeText={ (text) => handleChange(text, 'description') }
                            />
                        </View>

                        <View>
                            <Text style={ styles.label }>Possui referências?</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <RadioButton
                                        value="sim"
                                        color="#1281AB"
                                        status={ checked === 'sim' ? 'checked' : 'unchecked' }
                                        onPress={() => setChecked('sim')}
                                />
                                <Text style={{...styles.label, marginRight: 45}}>sim</Text>
                                <RadioButton
                                        value="não"
                                        color="#1281AB"
                                        status={ checked === 'não' ? 'checked' : 'unchecked' }
                                        onPress={() => setChecked('não')}
                                />
                                <Text style={ styles.label }>não</Text>
                            </View>
                        </View>
                    </ScrollView>

                    <View style={ styles.groupButton }>
                        <TouchableOpacity onPress={ adicionarMetodologia } style={{...styles.button, backgroundColor: "#1281AB"}}>
                            <Text style={ styles.btnText }>Salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ isClose } style={{...styles.button, backgroundColor: "#E76F51"}}>
                            <Text style={ styles.btnText }>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AdicionarMetodologia;

import React, { useState, useEffect } from 'react';
import {View, Text, Modal, TouchableOpacity, TextInput, Picker} from 'react-native';
import { styles } from '../../style/style';
import { RadioButton } from "react-native-paper";

const EditarMetodologia = (props) => {

    const initialMetodologiaState = {
        id : 0,
        area: "",
        title : "",
        objective: "",
        definition: "",
        description : "",
        references: "",
    }

    const [metodologia, setMetodologia] = useState(initialMetodologiaState)
    const [checked, setChecked] = useState(metodologia.references);
    const { isOpen, isClose } = props

    const handleChange = (value, name) => {
        setMetodologia( {...metodologia, [name] : value} )
    }

    useEffect( () => {
        const data = {
            id : props.selectedMetodologia.id,
            area: props.selectedMetodologia.area,
            title : props.selectedMetodologia.title,
            objective: props.selectedMetodologia.objective,
            definition: props.selectedMetodologia.definition,
            description : props.selectedMetodologia.description,
            references: props.selectedMetodologia.references,
        };
        setMetodologia(data)
    }, [])

    const editarMetodologia = () => {
        props.editarMetodologia({
            id : metodologia.id,
            area: metodologia.area,
            title : metodologia.title,
            objective: metodologia.objective,
            definition: metodologia.definition,
            description : metodologia.description,
            references : metodologia.references,
        })
        props.isClose()
    }

    return(
        <Modal visible={ isOpen } onRequestClose={ isClose } animationType="slide" transparent>
            <View style={ styles.centeredView }>
                <View style={ styles.modalView }>
                    <Text style={ styles.title }>Adicionar Metodologia</Text>

                    <View>
                        <Text>Título</Text>
                        <TextInput
                                style={ styles.input }
                                value={ metodologia.title }
                                placeholder="Informe o título aqui: "
                                onChangeText={ (text) => handleChange(text, 'title') }
                        />
                    </View>

                    <View>
                        <Text>Área</Text>
                        <Picker
                                style={ styles.input }
                                value={ metodologia.area }
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
                        <Text>Definição</Text>
                        <TextInput
                                style={ styles.input }
                                value={ metodologia.definition }
                                placeholder="Informe a definição aqui: "
                                onChangeText={ (text) => handleChange(text, 'definition') }
                        />
                    </View>

                    <View>
                        <Text>Objetivo</Text>
                        <TextInput
                                style={ styles.input }
                                value={ metodologia.objective }
                                placeholder="Informe o objetivo aqui: "
                                onChangeText={ (text) => handleChange(text, 'objective') }
                        />
                    </View>

                    <View>
                        <Text>Informações adicionais</Text>
                        <TextInput
                                style={ styles.input }
                                value={ metodologia.description }
                                placeholder="Informe as informações adicionais aqui: "
                                onChangeText={ (text) => handleChange(text, 'description') }
                        />
                    </View>

                    <View>
                        <Text>Possui referências?</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <RadioButton
                                    value="sim"
                                    color="#1281AB"
                                    onPress={() => setChecked('sim')}
                                    status={ checked === 'sim' ? 'checked' : 'unchecked' }
                            />
                            <RadioButton
                                    value="não"
                                    color="#1281AB"
                                    onPress={() => setChecked('não')}
                                    status={ checked === 'não' ? 'checked' : 'unchecked' }
                            />
                        </View>
                    </View>

                    <View style={ styles.groupButton }>
                        <TouchableOpacity onPress={ editarMetodologia } style={{...styles.button, backgroundColor: "#1281AB"}}>
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

export default EditarMetodologia;

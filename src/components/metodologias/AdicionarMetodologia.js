import React, { useState } from 'react';
import { RadioButton, HelperText, TextInput, Snackbar, Switch } from 'react-native-paper';
import { View, Text, Modal, TouchableOpacity, Picker, ScrollView } from 'react-native';

import { styles } from '../../style/style';
import MetodologiaService from '../../../services/MetodologiaService';

const AdicionarMetodologia = (props) => {

    const initialStateMetodologia = {
        title       : '',
        area        : '',
        description : '',
        definition  : '',
        objective   : '',
        references  : ''
    }

    const stateInitialValidate = {
        area: false,
        title : false,
        description: false,
        definition: false,
    }

    const [errorMessage, setErrorMessage] = useState('');
    const [addInvalid, setAddInvalid] = useState(stateInitialValidate);
    const [metodologia, setMetodologia] = useState(initialStateMetodologia);

    const [error, setError] = useState(false)
    const [checked, setChecked] = useState('');
    const [isSwitch, setIsSwitch] = useState(false);

    const onToggleSwitch = () => {
        setIsSwitch(!isSwitch);
        setMetodologia({...metodologia, ['objective'] :  isSwitch ? 'Pessoal' : 'Profissional'})
    }

    const { isOpen, isClose } = props;
    const onDismissSnackBar = () => setError(false);

    const handleChange = (value, name) => {
        if(value) {
            setAddInvalid({...addInvalid, [name]: false})
            setMetodologia({...metodologia, [name] : value})
        }else {
            setAddInvalid({...addInvalid, [name]: true})
        }
    }

    const adicionarMetodologia = async() => {
        if(metodologia.title === "" ||
                metodologia.area === "" ||
                metodologia.definition === "" ||
                metodologia.description === "" || checked === '') {
            setError(true)
        } else {
            setError(false)

            const data = {
                title : metodologia.title,
                area: metodologia.area,
                description: metodologia.description,
                definition: metodologia.definition,
                objective: metodologia.objective,
                references: checked
            }

            MetodologiaService.create(data)
                    .then(res => {
                        props.adicionarMetodologia({
                            id: res.data.id,
                            title : res.data.title,
                            area: res.data.area,
                            description: res.data.description,
                            definition: res.data.definition,
                            objective: res.data.objective,
                            references: checked
                        })
                        props.isClose()
                    })
                    .catch(err => {
                        setErrorMessage(`Erro ao conectar com a API: ${err}`)
                    })
        }
    }

    return(
        <Modal visible={ isOpen } onRequestClose={ isClose } animationType="slide" transparent>
            <View style={ styles.centeredView }>
                <View style={{ ...styles.modalView, width: 375, height: 635, }}>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={ styles.title }>Adicionar Metodologia</Text>
                    </View>

                    <ScrollView style={styles.scroll}>
                        <View style={{marginBottom: 5}}>
                            <TextInput
                                label="Título"
                                mode="outlined"
                                error={addInvalid.title}
                                placeholder="Informe o título aqui: "
                                onChangeText={(text) => handleChange(text, 'title')}
                            />
                            <HelperText
                                type="error"
                                padding="none"
                                visible={addInvalid.title}
                                style={{fontSize: 15}}
                            >Informe o título!</HelperText>
                        </View>

                        <View style={{marginBottom: 5}}>
                            <View style={{borderColor: "#919191", borderWidth: 1, borderRadius: 5, backgroundColor: "#eeecec"}}>
                                <Picker
                                    selectedValue={metodologia.area}
                                    style={{...styles.input, width: '100%', height:55}}
                                    onValueChange={(text) => handleChange(text, 'area')}
                                >
                                    <Picker.Item label="Selecione a área de estudo" value=""/>
                                    <Picker.Item label="Recursos Humanos" value="Recursos Humanos"/>
                                    <Picker.Item label="Tecnologias" value="Tecnologias"/>
                                    <Picker.Item label="Administração" value="Administração"/>
                                    <Picker.Item label="Organização de projetos" value="Organização de projetos"/>
                                    <Picker.Item label="Marketing" value="Marketing"/>
                                </Picker>
                            </View>

                            <HelperText
                                type="error"
                                padding="none"
                                style={{fontSize: 15}}
                                visible={addInvalid.area}
                            >
                                Selecione a área de estudo!
                            </HelperText>
                        </View>

                        <View style={{marginBottom: 5}}>
                            <TextInput
                                    label="Definição"
                                    mode="outlined"
                                    error={addInvalid.definition}
                                    placeholder="Informe a definição aqui: "
                                    onChangeText={(text) => handleChange(text, 'definition')}
                            />

                            <HelperText
                                type="error"
                                padding="none"
                                style={{fontSize: 15}}
                                visible={addInvalid.definition}
                            >
                                Informe a definição!
                            </HelperText>
                        </View>

                        <View style={{marginBottom: 5}}>
                            <TextInput
                                    mode="outlined"
                                    error={addInvalid.description}
                                    label="Informações adicionais"
                                    placeholder="Informe as informações adicionais aqui: "
                                    onChangeText={(text) => handleChange(text, 'description')}
                            />

                            <HelperText
                                    type="error"
                                    padding="none"
                                    style={{fontSize: 15}}
                                    visible={addInvalid.description}
                            >
                                Informe mais informações sobre o assunto!
                            </HelperText>
                        </View>

                        <View style={{marginBottom: 15}}>
                            <Text style={styles.label}>Objetivo</Text>

                            <View style={{flexDirection: 'row'}}>
                                <Text style={{...styles.label, fontSize: 18, color: '#666666', marginRight: 15, marginTop: 5}}>Pessoal</Text>
                                <Switch
                                        value={ isSwitch }
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={ onToggleSwitch }
                                        trackColor={{ false: '#D5D5D5', true: '#D5D5D5' }}
                                        thumbColor={ isSwitch ? '#1280AB' : '#E37B09' }
                                />
                                <Text style={{...styles.label, fontSize: 18, color: '#666666', marginLeft: 15, marginTop: 5}}>Profissional</Text>
                            </View>
                        </View>


                        <View>
                            <Text style={styles.label}>Esse material é autoral?</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <RadioButton
                                    value="Sim"
                                    color="#1281AB"
                                    onPress={() => setChecked('Sim')}
                                    status={ checked === 'Sim' ? 'checked' : 'unchecked' }
                                />
                                <Text style={{...styles.label, marginRight: 45}}>Sim</Text>
                                <RadioButton
                                    value="Não"
                                    color="#1281AB"
                                    onPress={() => setChecked('Não')}
                                    status={ checked === 'Não' ? 'checked' : 'unchecked' }
                                />
                                <Text style={styles.label}>Não</Text>
                            </View>

                            <HelperText
                                    type="error"
                                    padding="none"
                                    style={{fontSize: 15}}
                                    visible={'' === checked}
                            >
                                Necessário selecionar uma opção!
                            </HelperText>
                        </View>
                    </ScrollView>

                    <Snackbar
                            visible={error}
                            onDismiss={onDismissSnackBar}
                            action={{
                                label: 'fechar',
                                onPress: () => setError(false),
                            }}>
                        Preencha os campos corretamente!
                    </Snackbar>

                    <View style={styles.groupButton}>
                        <TouchableOpacity onPress={adicionarMetodologia} style={{...styles.button, backgroundColor: "#1281AB"}}>
                            <Text style={styles.btnText}>Salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={isClose} style={{...styles.button, backgroundColor: "#E76F51"}}>
                            <Text style={styles.btnText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AdicionarMetodologia;

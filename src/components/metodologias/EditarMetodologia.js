import React, { useState, useContext } from 'react';

import { styles } from '../../style/style';
import { ContextMetodologia } from './ContextMetodologia';
import MetodologiaService from '../../../services/MetodologiaService';
import { View, Text, Modal, TouchableOpacity, Picker, ScrollView } from 'react-native';
import { HelperText, RadioButton, Snackbar, Switch, TextInput } from 'react-native-paper';

const EditarMetodologia = (props) => {

    const stateInitialValidate = {
        area: false,
        title : false,
        description: false,
        definition: false,
    }

    const [errorMessage, setErrorMessage] = useState('');
    const [addInvalid, setAddInvalid] = useState(stateInitialValidate);
    const [metodologia, setMetodologia] = useContext(ContextMetodologia);

    const {isOpen, isClose} = props;
    const [error, setError] = useState(false);
    const [checked, setChecked] = useState(metodologia.references);
    const onDismissSnackBar = () => setError(false);

    const [isSwitch, setIsSwitch] = useState(metodologia.objective == 'Profissional');

    const onToggleSwitch = () => {
        setIsSwitch(!isSwitch);
        setMetodologia({...metodologia, ['objective'] :  isSwitch ? 'Pessoal' : 'Profissional'})
    }

    const handleChange = (value, name) => {
        if(value) {
            setAddInvalid({...addInvalid, [name]: false})
            setMetodologia({...metodologia, [name] : value})
        }else {
            setAddInvalid({...addInvalid, [name]: true})
        }
    }

    const editarMetodologia = () => {
        if(addInvalid.title ||
                addInvalid.area ||
                addInvalid.definition ||
                addInvalid.description || checked == '') {

            setError(true)
        } else {
            setError(false)

            const id = metodologia.id
            const data = {
                title : metodologia.title,
                area: metodologia.area,
                description: metodologia.description,
                definition: metodologia.definition,
                objective: metodologia.objective,
                references: metodologia.references
            }

            MetodologiaService.update(id, data)
                    .then(res => {
                        setMetodologia({
                            id: res.data.id,
                            title : res.data.title,
                            area: res.data.area,
                            description: res.data.description,
                            definition: res.data.definition,
                            objective: res.data.objective,
                            references: res.data.references
                        })
                        props.isClose()
                    })
                    .catch(err => {
                        setErrorMessage(`Erro ao conectar na API: ${err}`)
                    })
        }
    }

    return(
        <Modal
            transparent
            visible={isOpen}
            animationType="slide"
            onRequestClose={isClose}
        >

            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.title}>Editar Material</Text>

                    <ScrollView style={styles.scroll}>

                        <View style={{marginBottom: 5}}>
                            <Text style={styles.label}>Título</Text>
                            <TextInput
                                mode="outlined"
                                error={addInvalid.title}
                                value={ metodologia.title }
                                placeholder="Informe o título aqui: "
                                onChangeText={(text) => handleChange(text, 'title')}
                            />
                            <HelperText
                                type="error"
                                padding="none"
                                style={{fontSize: 15}}
                                visible={addInvalid.title}
                            >Não deixe o campo vazio!
                            </HelperText>
                        </View>

                        <View style={{marginBottom: 5}}>
                            <Text style={styles.label}>Área</Text>
                            <View style={{borderColor: "#919191", borderWidth: 1, borderRadius: 5, backgroundColor: "#eeecec"}}>
                                <Picker
                                        value={ metodologia.area }
                                        selectedValue={metodologia.area}
                                        style={{...styles.input, width: '100%', height:55}}
                                        onValueChange={(text) => handleChange(text, 'area')}
                                >
                                    <Picker.Item label="Selecione a área de estudo" value=""/>
                                    <Picker.Item label="Marketing" value="Marketing"/>
                                    <Picker.Item label="Tecnologias" value="Tecnologias"/>
                                    <Picker.Item label="Administração" value="Administração"/>
                                    <Picker.Item label="Recursos Humanos" value="Recursos Humanos"/>
                                    <Picker.Item label="Organização de projetos" value="Organização de projetos"/>
                                </Picker>
                            </View>

                            <HelperText
                                type="error"
                                padding="none"
                                style={{fontSize: 15}}
                                visible={addInvalid.area}
                            >Não deixe o campo vazio!
                            </HelperText>
                        </View>

                        <View style={{marginBottom: 5}}>
                            <Text style={styles.label}>Definição</Text>
                            <TextInput
                                    mode="outlined"
                                    error={ addInvalid.definition }
                                    value={ metodologia.definition }
                                    placeholder="Informe a definição aqui: "
                                    onChangeText={(text) => handleChange(text, 'definition')}
                            />
                        </View>

                        <View style={{marginBottom: 5}}>
                            <Text style={styles.label}>Informações adicionais</Text>
                            <TextInput
                                    mode="outlined"
                                    error={addInvalid.description}
                                    value={ metodologia.description }
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
                                        onValue={ onToggleSwitch }
                                        trackColor={{ false: '#D5D5D5', true: '#D5D5D5' }}
                                        thumbColor={ isSwitch ? '#1280AB' : '#E37B09' }
                                />
                                <Text style={{...styles.label, fontSize: 18, color: '#666666', marginLeft: 15, marginTop: 5}}>Profissional</Text>
                            </View>
                        </View>

                        <View style={{marginBottom: 20}}>
                            <Text style={styles.label}>Esse material é autoral?</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <RadioButton
                                        color="#1281AB"
                                        value={ metodologia.area }
                                        onPress={() => setChecked('Sim')}
                                        status={ checked === 'Sim' ? 'checked' : 'unchecked' }
                                />
                                <Text style={{...styles.label, marginRight: 45}}>Sim</Text>
                                <RadioButton
                                        color="#1281AB"
                                        value={ metodologia.area }
                                        onPress={() => setChecked('Não')}
                                        status={ checked === 'Não' ? 'checked' : 'unchecked' }
                                />
                                <Text style={styles.label}>Não</Text>
                            </View>
                        </View>

                        <Snackbar
                                visible={error}
                                onDismiss={onDismissSnackBar}
                                action={{
                                    label: 'fechar',
                                    onPress: () => setError(false),
                                }}>
                            Preencha os campos corretamente!
                        </Snackbar>
                    </ScrollView>

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

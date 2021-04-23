import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Icon } from "react-native-elements";
import { Text, View, ImageBackground } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { styles } from "./src/style/style";

import Feed from "./src/views/Feed";
import Ideias from "./src/views/Ideias";
import Usuario from "./src/views/Usuario";

const Stack = createStackNavigator();

const TelaInicial = ({ navigation }) => {
    return (
        <>
            <View style={ styles.body }>
                <ImageBackground source={ require('./src/images/fundo1.png') } style={ styles.bg }>
                    <View style={ styles.containerFeed }>

                        <View styles={{ alignItems: 'center' }}>
                            <Text styles={ styles.title }>Tela inicial</Text>
                        </View>

                    </View>
                    <StatusBar style="light" />
                </ImageBackground>
            </View>
        </>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Feed" screenOptions={ optionScreen }>
                <Stack.Screen name="Inicio" component={ TelaInicial }/>
                <Stack.Screen name="Usuario" component={ Usuario }/>

                <Stack.Screen
                    name="Feed"
                    component={ Feed }
                    options={ ({ navigation }) => {
                        return {
                            title: 'Tela de Feed',
                            headerRight: () => (
                                <Button
                                    type="clear"
                                    icon={ <FontAwesome name="lightbulb-o" size={30} color="#D16E0B"/> }
                                    onPress={() => navigation.navigate('Ideias')}
                                />
                            )
                        }
                    } }
                />

                <Stack.Screen
                    name="Ideias"
                    component={ Ideias }
                    options={ ({ navigation }) => {
                        return {
                            title: 'Tela de ideias',
                            headerRight: () => (
                                <Button
                                    type="clear"
                                    icon={ <Icon name="add" size={40} color="#D16E0B"/> }
                                    onPress={() => navigation.navigate('Ideias')}
                                />
                            )
                        }
                    } }
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
const optionScreen = {
    headerStyle: {
        height: 80,
        backgroundColor: '#1D1D1D'
    },
    headerTitleStyle: {
        fontSize: 20,
        color: "#FFFFFF",
        paddingTop: 5,
        textTransform: 'uppercase'
    },
    headerTintColor: '#D16E0B',
    headerLeftContainerStyle: {
        paddingLeft: 15
    },
    headerRightContainerStyle: {
        paddingRight: 15
    }
}

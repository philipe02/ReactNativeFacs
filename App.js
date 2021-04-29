import React from "react";
import { StatusBar } from "expo-status-bar";
import { Header } from "react-native-elements";
import { Text, View, ImageBackground } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { styles } from "./src/style/style";

import Metodologias from "./src/views/Metodologias";
import ListaIdeia from './src/views/Ideias';
import Usuario from "./src/views/Usuario";
import Feed from "./src/views/Feed";
import RankingIdeias from "./src/views/RankingIdeias";

const Drawer = createDrawerNavigator();

const TelaInicial = ({ navigation }) => {
    return (
        <>
            <Header
                    containerStyle={{
                        height: 80,
                        backgroundColor: "#1D1D1D"
                    }}
                    leftComponent={{
                        icon: "menu",
                        color: "#D16E0B",
                        onPress: navigation.openDrawer,
                        size: 35,
                    }}
                    centerComponent={{
                        text: "Ideias",
                        style: styles.headerText,
                    }}
                    rightComponent={{
                        icon: "home",
                        color: "#D16E0B",
                        size: 35,
                        onPress: () => navigation.navigate("Inicio"),
                    }}
            />

            <View style={ styles.body }>
                <ImageBackground source={ require('./src/images/fundo1.png') } style={ styles.bg }>
                    <View style={ styles.containerFeed }>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={ styles.title }>Tela de ideias</Text>
                        </View>
                    </View>

                    <StatusBar style="light"/>
                </ImageBackground>
            </View>
        </>
    );
};

export default function App() {
    return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Inicio">
                    <Drawer.Screen name="Inicio" component={TelaInicial} />
                    <Drawer.Screen name="Ideias" component={ListaIdeia} />
                    <Drawer.Screen name="Usuario" component={Usuario} />
                    <Drawer.Screen name="Metodologias" component={ Metodologias }/>
                    <Drawer.Screen name="Feed" component={Feed} />
                    <Drawer.Screen name="Ranking Ideias" component={RankingIdeias} />
                </Drawer.Navigator>
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

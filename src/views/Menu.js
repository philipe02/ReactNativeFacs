import React, { useContext, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ideias from "./Ideias";
import Feed from "./Feed";
import Perfil from "./Perfil";
import ListaUsuario from "./ListaUsuarios";
import RankingIdeias from "./RankingIdeias";
import Metodologias from "./Metodologias";

const Drawer = createDrawerNavigator();

const Menu = ({ navigation, route }) => {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen name="Ideias" component={Ideias} />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Metodologias" component={Metodologias} />
      <Drawer.Screen name="Lista de Usuários" component={ListaUsuario} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Ranking Ideias" component={RankingIdeias} />
    </Drawer.Navigator>
  );
};

export default Menu;

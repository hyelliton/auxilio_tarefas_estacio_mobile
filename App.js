import  React  from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Inicio from './Telas/Inicio';
import FazerLogin from './Telas/FazerLogin';
import CriarConta from './Telas/CriarConta';
import Comecar from './Telas/VamosComecar';
import Home from './Telas/Conta/index';
import Recupere from './Telas/EsqueciSenha/';
import Diarias from './Telas/AtivDiarias';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName='Inicio'>
        
        <Drawer.Screen
        name='Inicio'
        component={Inicio}
        options={{
          headerShown: false
        }}/>

        <Drawer.Screen 
        name='FazerLogin'
        component={FazerLogin}
        options={{
          title: 'FazerLogin',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
        }}/>

        <Drawer.Screen 
        name='CriarConta'
        component={CriarConta}
        options={{
          title: 'Conta',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
        }}/>

        <Drawer.Screen 
        name='Adicaodeatividade'
        component={Adicaodeatividade}
        options={{
          title: 'Adicaodeatividade',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
      }}/>

        <Drawer.Screen 
        name='Comecar'
        component={Comecar}
        options={{
          title: 'VamosComecar',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
        }}/>

        <Drawer.Screen 
        name='Home'
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: true
        }}/>

        <Drawer.Screen 
        name='Homemenu'
        component={Homemenu}
        options={{
          title: 'Homemenu',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
        }}/>

        <Drawer.Screen 
        name='Recupere'
        component={Recupere}
        options={{
          title: 'Recupere',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
        }}/>

        <Drawer.Screen 
        name='Diarias'
        component={Diarias}
        options={{
          title: 'Diarias',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
        }}/>

      </Drawer.Navigator>

    </NavigationContainer>
  );
}
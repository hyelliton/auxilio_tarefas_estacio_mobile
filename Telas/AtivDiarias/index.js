import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity,} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox'; 
import estilos from './style';
import styles from './style';

export default function Diarias({navigation}){
  const [isChecked, setChecked] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);

  return(

    <LinearGradient
      style={{flex: 1}}
      colors={['#9FB9FC', '#9FB9FC', '#9FB9FC']}>

      <View style={estilos.fundo}>
        <Image source={require('../Imagens/estacioTransparente.png' )} style={estilos.logo}></Image>
        
        <View style={estilos.janela}>

          <TouchableOpacity 
            onPress = {() => navigation.navigate('')}
            activeOpacity={0.5}>
            <Text style={estilos.bottondata}>SEG 24/04/2023</Text>
          </TouchableOpacity>

          <View style={estilos.item_check}>
            <Checkbox style={estilos.checkbox}value={isChecked} onValueChange={setChecked} />
            <Text style={estilos.inputamanhoplace}>Retenção</Text>
          </View>
          
          <View style={estilos.item_check}>
            <Checkbox style={estilos.checkbox} value={isChecked2} onValueChange={setChecked2} />
            <Text style={estilos.inputamanhoplace} >Qualidade de Ensino</Text>
          </View>

          <View style={estilos.item_check}>
            <Checkbox style={estilos.checkbox} value={isChecked3} onValueChange={setChecked3} />
            <Text style={estilos.inputamanhoplace} >Captação Acompanha o Funil de captação</Text>
          </View>

          <View style={estilos.item_check1}>
            <Checkbox style={estilos.checkbox} value={isChecked4} onValueChange={setChecked4} />
            <Text style={estilos.inputamanhoplace} >Captação Realizar Reunião da Equipe</Text>
          </View>

          {/* <View style={estilos.container}>

            <View style={estilos.checkboxContainer}>
              <Checkbox style={estilos.checkbox} value={isChecked} onValueChange={setChecked} />
            </View>

            <View style={estilos.checkboxContainer}>
              <Checkbox style={estilos.checkbox2} value={isChecked2} onValueChange={setChecked2} />
            </View>

            <View style={estilos.checkboxContainer}>
              <Checkbox style={estilos.checkbox3} value={isChecked3} onValueChange={setChecked3} />
            </View>

            <View style={estilos.checkboxContainer}>
              <Checkbox style={estilos.checkbox4} value={isChecked4} onValueChange={setChecked4} />
            </View>
          </View> */}
          <View style={{mar}}>
            <TouchableOpacity 
              onPress = {() => navigation.navigate('')}
              style={estilos.bottomVoltar}
              activeOpacity={0.5}>
              <Image source={require('../Imagens/logoReturn2.png' )} style={estilos.logoReturn}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
    
  );
}


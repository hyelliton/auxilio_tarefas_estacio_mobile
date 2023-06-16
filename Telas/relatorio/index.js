import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity,} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';
import estilos from './style';

export default function Relatoriorealizado({navigation}){
  
  const [isChecked, setChecked] = useState(false);
  const [isChecked2, setChecked2] = useState(false);

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
            <View>
              <Text style={estilos.botaorelatorioativi}>REALATORIO DE ATIVIDADES</Text>
            </View>
          </TouchableOpacity>
          
          <View style={estilos.item_de}>
            <Text style={estilos.de}>DE: </Text>
            <TextInput style={estilos.inputde} placeholder={'01/04/2023'} ></TextInput>
          </View>

          <View style={estilos.item_Ate}>
            <Text style={estilos.Ate}>ATÉ: </Text>
            <TextInput style={estilos.inputAte} placeholder={'30/04/2023'} ></TextInput>
          </View>

          <View style={estilos.container}>

            <View style={estilos.item_check}>
              <Text style={estilos.Filtros}>Filtra por tarefas:</Text>
            </View>

            <View style={estilos.item_check}>
              <Checkbox style={estilos.checkbox}value={isChecked} onValueChange={setChecked} />
              <Text style={estilos.Realizadas}>REALIZADAS</Text>
            </View>

            <View style={estilos.item_check}>
              <Checkbox style={estilos.checkbox}value={isChecked2} onValueChange={setChecked2} />
              <Text style={estilos.Realizadas}>NÃO REALIZADAS</Text>
            </View>

            <View style={{flexDirection:'row'}}>
              <View style={estilos.botaogerar}>
                <Button title=" GERAR PDF" color= '#B0C4DE'
                onPress={() => navigation.navigate('')} />
              </View>

              <View style={estilos.botaogerar}>
                <Button title=" ENVIA POR E-MAIL" color= '#B0C4DE'
                onPress={() => navigation.navigate('')} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
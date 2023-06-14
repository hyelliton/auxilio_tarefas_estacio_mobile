import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity,} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox'; 
import estilos from './style';

export default function Semanaisadicionadas ({navigation}){
  const [isChecked, setChecked] = useState(false);

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
                <Text style={estilos.bottondata}>SEM3- 23 a 29/04/23</Text>
              </View>
            </TouchableOpacity>


            <View style={estilos.item_check}>
              <TextInput style={estilos.inputamanhoplace} 
              placeholder={'Gestão : Realizar Reuniões para acompanhamento do resultado (GDO)'} ></TextInput>
            </View>
            
            <View style={estilos.item_check}>
              <TextInput style={estilos.inputamanhoplace} 
              placeholder={'Gestão : Realizar Reuniões para acompanhamento dos resultados(GDA)'} ></TextInput>

            </View>

            <View style={estilos.item_check}>
              <TextInput style={estilos.inputamanhoplace} 
              placeholder={'Engajamento : Realizar tratamento do ponto administrativo monitorar o banco de horas'} ></TextInput>

            </View>

            <View style={estilos.item_check}>
              <TextInput style={estilos.inputamanhoplace} 
              placeholder={'Engajamento: Realizar tratamento administrativo'} ></TextInput>

            </View>

            <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        

      
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox2} value={isChecked} onValueChange={setChecked} />
        

      
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox3} value={isChecked} onValueChange={setChecked} />
        

      
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox4} value={isChecked} onValueChange={setChecked} />
        

      
      </View>

      
      
    </View>

    <TouchableOpacity 
                onPress = {() => navigation.navigate('Adicaodeatividade')}
                style={estilos.bottonLogoStyle}
                activeOpacity={0.5}>
            <Image source={require('../Imagens/logoReturn2.png' ) } 
            style={estilos.logoReturn}></Image>
            </TouchableOpacity>
                     
          </View>
      </View>
        
    </LinearGradient>
    
  );
}



      
    


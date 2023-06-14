import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity,} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import estilos from './style';

export default function Adicaodeatividade({navigation}){

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
                <Text style={estilos.bottondata}>ADICIONAR ATIVIDADE</Text>
              </View>
            </TouchableOpacity>


            <View style={estilos.item_check}>
            <Text style={estilos.adicionartitulo}>
                ADICIONAR TÍTULO
              </Text>
              <TextInput style={estilos.inputamanhoplace} 
              placeholder={'Engajamento'} ></TextInput>
            </View>
            
            <View style={estilos.item_check}>
            <Text style={estilos.textdescricao}>
                DESCRIÇÂO
              </Text>
              <TextInput style={estilos.inputamanhoplace2} 
              placeholder={'Realizar tratameto administrativo'} ></TextInput>

            </View>

        </View>

      </View>


    <View style={estilos.botaosalvar}>
              <Button title=" Salvar" color= '#9FB9FC'
                      onPress={() => navigation.navigate('Home')} />
            </View>

    <TouchableOpacity 
                onPress = {() => navigation.navigate('Semanais')}
                style={estilos.bottonLogoStyle}
                activeOpacity={0.5}>
            <Image source={require('../Imagens/logoReturn2.png' ) } 
            style={estilos.logoReturn}></Image>
            </TouchableOpacity>
                     
            <View style={estilos.lapisimagem}>

            <Image source={require('../Imagens/lapis.png' )} style={estilos.logo}></Image>
      
            </View>


            <View style={estilos.dadosimagem}>

            <Image source={require('../Imagens/dados.png' )} style={estilos.logo}></Image>
      
            </View>
    </LinearGradient>

    
    
  );
}





      
    


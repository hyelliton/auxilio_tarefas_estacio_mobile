import  React  from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estilos from './style';

export default function Inicio({navigation}){
  return(
    
    <LinearGradient 
      style={{
      flex: 1}}
      colors={['#9FB9FC', '#FFF', '#9FB9FC']}>

    <View style={estilos.item_login}>
      <Image source={require('../Imagens/estacioTransparente.png' )} style={estilos.logo}></Image>
        <Text style={estilos.titulo1}>Deslize</Text>
        <Text style={estilos.titulo2}>e agende seu mundo com a ESTÁCIO!  </Text>
          <SafeAreaView >
            <View style={estilos.botao}>
              <TouchableOpacity 
                onPress = {() => navigation.navigate('FazerLogin')}
                activeOpacity={0.5}>
              <Image source={require('../Imagens/logoUp.png' )}/>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
    </View>
    
    </LinearGradient>
  );
}
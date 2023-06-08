import  React  from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import estilos from './style';

export default function Comecar({navigation}){
  return(

    <LinearGradient 
      style={{
      flex: 1}}
      colors={['#9FB9FC', '#FFF', '#9FB9FC']}>
        
      <View style={estilos.item_login}>
       <Image source={require('../Imagens/estacioTransparente.png' )} style={estilos.logo}></Image>
       <Text style={estilos.titulo1}>Obrigado(a),</Text>
       <Text style={estilos.titulo2}>Vamos começar!</Text>
       
       <View style={estilos.janela}>
          <Text style={estilos.titulo}>NOSSO OBJETIVO É FACILITAR
           SUA VIDA!  {'\n'}
           PLANEJE, AGENDE E ACOMPANHE SUAS ATIVIDADES, TUDO NA PALMA
            DA SUA MÃO. {'\n'}
            DÊ SEUS PRIMEIROS PASSOS, CLIQUE EM VOLTAR E FAÇA SEU LOGIN!</Text>
       </View>
    
        
       <View style={estilos.botao}>
        <TouchableOpacity 
                onPress = {() => navigation.navigate('FazerLogin')}
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
import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import estilos from './style';

export default function Homemenu({navigation}){
  return(

      
    <LinearGradient
        style={{flex: 1}}
        colors={['#ffffff', '#ffffff', '#ffffff']}>

        <View style={estilos.fundo}>
            <Image source={require('../Imagens/MR2.png' )} style={estilos.image}></Image>
            
            <View style={estilos.fundo}>
                <Text style={estilos.titulo1}>Melissa Rodrigues</Text>
            
            </View>
            
            <View style={estilos.janela}>
                <TouchableOpacity 
                        onPress = {() => navigation.navigate('')}
                        style={estilos.bottonrelatorio}
                        activeOpacity={0.5}>

                    <View style={estilos.imagerelatorio}>
                        <Image source={require('../Imagens/papelrelat.png' ) } 
                        style={estilos.logoReturnrelatorio}></Image>
                        
                        <Text style={estilos.botaorelatorio}>Relatorio</Text>
                        
                    </View>
                </TouchableOpacity>
                
                <View style={estilos.imageevento}>
                     <Image source={require('../Imagens/cumbuca.png' ) } 
                        style={estilos.logoReturnevento}></Image>
                    <TouchableOpacity 
                        onPress = {() => navigation.navigate('')}
                        style={estilos.bottonEvento}
                        activeOpacity={0.5}>
                        <Text style={estilos.botaoevento}>Evento</Text>
                    </TouchableOpacity>
                

                <TouchableOpacity 
                    onPress = {() => navigation.navigate('')}
                    style={estilos.bottonEvento}
                    activeOpacity={0.5}>
                    <Image source={require('../Imagens/logoReturn2.png' ) } 
                    style={estilos.logoReturn}></Image>
                </TouchableOpacity>



                <View style={estilos.Logout}>
                    
                    <TouchableOpacity 
                        onPress = {() => navigation.navigate('')}
                        style={estilos.bottonLogout}
                        activeOpacity={0.5}>
                        <Text style={estilos.botaologout}>LOG OUT</Text>
                    </TouchableOpacity>
                </View>

                </View>

                
                </View>

                
                
            </View>
    
    </LinearGradient>
  );
}


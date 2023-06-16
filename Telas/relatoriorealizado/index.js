import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity,} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; 
import estilos from './style';

export default function Relatoriorealizado({navigation}){
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
                <Text style={estilos.bottonrealizadas}>REALIZADAS 01/04 a 30/04/2023</Text>
              </View>
            </TouchableOpacity>
              
            
          
            <View style={estilos.item_login}>

            <TouchableOpacity 
              onPress = {() => navigation.navigate('')}
              activeOpacity={0.5}>
              <View>
                <Text style={estilos.bottonrealizadas2}>Egajamento participaçao da reuniao</Text>
              </View>
            </TouchableOpacity>
              
              
            </View>
            
            <View style={estilos.item_senha}>
              
              <View style={estilos.item_visualizar}>
              <TouchableOpacity 
              onPress = {() => navigation.navigate('')}
              activeOpacity={0.5}>
              <View>
                <Text style={estilos.bottonrealizadas3}>Engajamento realizar tratamento</Text>
              </View>
            </TouchableOpacity>


            <View>
              <Text style={estilos.email}>
               E-Mail:
              </Text>
              <TextInput style={estilos.inputemail} 
              placeholder={''} ></TextInput>
            </View>
                
              </View>
            </View>
            
            

            

              

            <View style={estilos.botaoenviar}>
              <Button title=" ENVIAR" color= '#B0C4DE'
                      onPress={() => navigation.navigate('Home')} />
            </View>

            <View style={estilos.botaopdf}>
              <Button title=" PDF" color= '#B0C4DE'
                      onPress={() => navigation.navigate('Home')} />
            </View>


            <TouchableOpacity 
                onPress = {() => navigation.navigate('')}
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



      
    


import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity,} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';
import estilos from './style';

export default function Relatoriorealizado({navigation}){
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
                <Text style={estilos.botaorelatorioativi}>REALATORIO DE ATIVIDADES</Text>
              </View>
            </TouchableOpacity>
              
            
          
        <View style={estilos.item_de}>
            <Text style={estilos.de}>
               DE:
            </Text>
              <TextInput style={estilos.inputde} 
              placeholder={'01/04/2023'} ></TextInput>
        
        </View>


        <View style={estilos.item_Ate}>
            <Text style={estilos.Ate}>
               ATÉ:
            </Text>
              <TextInput style={estilos.inputAte} 
              placeholder={'30/04/2023'} ></TextInput>
        
        </View>


        <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        

      
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox2} value={isChecked} onValueChange={setChecked} />
        

      
      </View>


      <Text style={estilos.Realizadas}>
               REALIZADAS
              </Text>

              <Text style={estilos.Naorealizadas}>
               NÃO REALIZADAS
              </Text>


      </View>
            
              
              
    </View>
            
            <View style={estilos.item_Filtros}>
              
            <Text style={estilos.Filtros}>
               FILTROS
              </Text>

        </View>
      </View>
          
            
            

            

              

            <View style={estilos.botaogerar}>
              <Button title=" GERAR" color= '#B0C4DE'
                      onPress={() => navigation.navigate('')} />
            </View>

            
            <TouchableOpacity 
                onPress = {() => navigation.navigate('')}
                style={estilos.bottonLogoStyle}
                activeOpacity={0.5}>
            <Image source={require('../Imagens/logoReturn2.png' ) } 
            style={estilos.logoReturn}></Image>
            </TouchableOpacity>

       
          
    
        
    </LinearGradient>
    
  );
}





      
    


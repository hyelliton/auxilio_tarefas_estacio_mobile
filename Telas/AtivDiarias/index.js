import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity,} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox'; 
import { color } from 'react-native-reanimated';

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
            <Checkbox style={styles.checkbox}value={isChecked} onValueChange={setChecked} />
            <Text style={estilos.inputamanhoplace}>Retenção</Text>
          </View>
          
          <View style={estilos.item_check}>
            <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
            <Text style={estilos.inputamanhoplace} >Qualidade de Ensino</Text>
          </View>

          <View style={estilos.item_check}>
            <Checkbox style={styles.checkbox} value={isChecked3} onValueChange={setChecked3} />
            <Text style={estilos.inputamanhoplace} >Captação Acompanha o Funil de captação</Text>
          </View>

          <View style={estilos.item_check1}>
            <Checkbox style={styles.checkbox} value={isChecked4} onValueChange={setChecked4} />
            <Text style={estilos.inputamanhoplace} >Captação Realizar Reunião da Equipe</Text>
          </View>

          {/* <View style={styles.container}>

            <View style={styles.checkboxContainer}>
              <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
            </View>

            <View style={styles.checkboxContainer}>
              <Checkbox style={styles.checkbox2} value={isChecked2} onValueChange={setChecked2} />
            </View>

            <View style={styles.checkboxContainer}>
              <Checkbox style={styles.checkbox3} value={isChecked3} onValueChange={setChecked3} />
            </View>

            <View style={styles.checkboxContainer}>
              <Checkbox style={styles.checkbox4} value={isChecked4} onValueChange={setChecked4} />
            </View>
          </View> */}
          <View style={{mar}}>
            <TouchableOpacity 
              onPress = {() => navigation.navigate('')}
              style={styles.bottomVoltar}
              activeOpacity={0.5}>
              <Image source={require('../Imagens/logoReturn2.png' )} style={estilos.logoReturn}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
    
  );
}

const estilos = StyleSheet.create({

  fundo: {
    flex: 1,
  },

  logo:{
    resizeMode: 'contain',
    marginTop: 12,
    marginLeft: 49,
    width: 230,
  },
  
  janela:{
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    top:110
  },
  
  inputamanhoplace: {
    backgroundColor: '#F4F3F3',
    width: '95%',
    height: 50,
    padding: 8,
    borderRadius: 50,
  },
  
  item_check:{
    flexDirection: 'row',
    marginHorizontal: 60,
    height: 80,
    marginLeft: 40,
    top:80,
    
  },

  item_check1:{
    flexDirection: 'row',
    marginHorizontal: 60,
    height: 80,
    marginLeft: 40,
    top:80,
    backgroundColor: 'red'
    
  },

  bottondata: {
    textAlign:'center',
    marginTop:-135,
    marginLeft: 30,
    backgroundColor: '#F4F3F3',
    width: '81%',
    height: 50,
    padding: 8,
    borderRadius: 50,
    top:35,
    fontWeight: 'bold'
  },

  logoReturn:{
    width: 30,
    alignSelf: 'center',
    height: 25,
    backgroundColor: 'red',
    
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  checkbox: {
    alignSelf: 'center',
    marginTop:-25,
    margin: 5,
    marginBottom: 10,
    borderRadius: 100
    
  },

  checkbox2: {
    alignSelf: 'center',
    marginLeft:-156,
    marginTop:-435,
    margin: 10,
    marginBottom: 20
  },
  checkbox3: {
    alignSelf: 'center',
    marginLeft:-156,
    marginTop:-345,
    margin: 10,
  },
  
  checkbox4: {
    alignSelf: 'center',
    marginLeft:-156,
    marginTop:-250,
    margin: 10,
  },
  
  bottomVoltar:{
    marginLeft: '50%',
    marginEnd: '50%',
    backgroundColor: 'red',
    
  },

  
});


      
    


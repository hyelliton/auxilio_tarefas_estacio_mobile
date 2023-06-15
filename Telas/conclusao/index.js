import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import estilos from './style';

export default function Conclusao({navigation}){
  return(
    <LinearGradient
    style={{flex: 1}}
    colors={['#9FB9FC', '#9FB9FC', '#9FB9FC']}>
    
      <View style={estilos.fundo}>
        <Image source={require('../Imagens/estacioTransparente.png' )} style={estilos.logo}></Image>
  
        <View style={estilos.espaco}>
            <Text style={estilos.titulo1}>Obrigado,</Text>
            <Text style={estilos.titulo2}>atividade concluída!</Text>
        </View>
            
        <View style={estilos.janela}>
          <KeyboardAvoidingView 
            keyboardVerticalOffset={-500}
            behavior="padding"
            style={{flex: 1}}>
              
            <ScrollView style={{flex: 1, marginTop: '5%'}}>

              <View style={estilos.item_visto}>
                <TextInput style={estilos.conclusaovisualizada} 
                placeholder={'Atividade:Engajamento participação da reunião de rotina comercial com gerente comercial e força de venda(GDC) '} 
                ></TextInput>

              </View>

              <View>
                <Text style={estilos.email}>
                E-Mail
                </Text>
                <TextInput style={estilos.inputemail} 
                placeholder={''} ></TextInput>
              </View>
                
              <View style={estilos.botaoconfirmar}>
                <Button title=" Confirmar" color= '#9FB9FC'
                  onPress={() => navigation.navigate('Home')} />
              </View>

              <TouchableOpacity 
                onPress = {() => navigation.navigate('')}
                style={estilos.bottonLogoStyle}
                activeOpacity={0.5}>
                <Image source={require('../Imagens/logoReturn2.png' ) } 
                style={estilos.logoReturn}></Image>
              </TouchableOpacity>
            </ScrollView>    
          </KeyboardAvoidingView>
        </View>    
      </View>        
    </LinearGradient>
    
  );
}



      
    


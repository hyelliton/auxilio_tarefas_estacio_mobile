import  React  from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; 
import estilos from './style';

export default function FazerLogin ({navigation}){
  return(
    
    <LinearGradient
    style={{flex: 1}}
    colors={['#9FB9FC', '#FFF', '#9FB9FC']}>
      

        <View style={estilos.fundo}>
          <Image source={require('../Imagens/estacioTransparente.png' )} style={estilos.logo}></Image>
    
          <View style={estilos.espaco}>
              <Text style={estilos.titulo1}>Olá.</Text>
              <Text style={estilos.titulo2}>Seja bem vindo(a)!</Text>
          </View>

            <View style={estilos.janela}>

              <KeyboardAvoidingView 
                keyboardVerticalOffset={-500}
                behavior="padding"
                style={{flex: 1}}> 

                <ScrollView style={{width: '100%'}}>

                  <Text style={estilos.titulo3}>
                    FAÇA SEU LOGIN
                  </Text>
                  <View style={estilos.item_login}>
                    <Text style={estilos.textMatricula}>
                      MATRÍCULA:
                    </Text>
                    <TextInput style={estilos.inputMatricula} 
                    placeholder={'Digite sua matrícula'} ></TextInput>
                  </View>
                  
                  <View style={estilos.item_senha}>
                    <Text style={estilos.textSenha}>
                      SENHA:
                    </Text>
                    <View style={estilos.item_visualizar}>
                      <TextInput style={estilos.inputSenha} 
                      placeholder={'Digite sua senha'} ></TextInput>
                      <TouchableOpacity style={estilos.icon}>
                        <Ionicons 
                        name="eye" 
                        color="grey"
                        size={20}/>
                      </TouchableOpacity>
                    </View>
                  </View>
                  
                   <View style={estilos.cadastre} >
                    <TouchableOpacity 
                      onPress = {() => navigation.navigate('Recupere')}
                      activeOpacity={0.5}>
                      <Text style={estilos.esqueceu}>Esqueceu a senha?{'\n'}{'\n'}</Text>
                    </TouchableOpacity>
                  </View> 
                 
                  <View style={estilos.cadastre}>
                    <TouchableOpacity 
                    onPress = {() => navigation.navigate('CriarConta')}
                    activeOpacity={0.5}>
                    <Text style={estilos.naoTemConta}>
                    Não tem conta? CADASTRE-SE! </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={estilos.botao}>
                    <Button title=" LOGIN" color= '#9FB9FC' onPress={() => navigation.navigate('Home')} />
                  </View>  
                 
                </ScrollView>
              </KeyboardAvoidingView> 
        
            </View>
            
        </View>
        
    </LinearGradient>
    
  );
}
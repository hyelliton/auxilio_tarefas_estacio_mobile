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

const estilos = StyleSheet.create({

  fundo: {
    flex: 1
  },

  logo:{
    resizeMode: 'contain',
    marginTop: 12,
    marginLeft: 80,
    width: 230,
  },
  
  espaco:{
    marginTop: 'auto',
  },

  titulo1:{
    margin: 8,
    marginTop: 17,
    marginLeft: 20,
    width: 175,
    height: 55,
    left: 5,
    fontSize: 25,
    color: 'black'
  },

  titulo2:{
    marginVertical: 5,
    marginTop: -12,
    marginLeft: 20,
    width: 250,
    height: 55,
    fontSize: 25,
    color: 'black'
  },

  janela:{
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    textAlign: 'center',
    justifyContent: 'center'
  },

  titulo3:{
    marginVertical: 5,
    marginTop: 50,
    marginLeft: 125,
    width: 175,
    height: 50,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },

  item_login:{
    
    marginHorizontal: 25,
    height: 80,
    marginLeft: 20,
    marginTop: 20
  },

  textMatricula:{
    
    marginTop: 5,
    marginLeft: 7,
    fontWeight: 'bold'
  },

  inputMatricula: {
    
    backgroundColor: '#F4F3F3',
    width: '85%',
    height: 50,
    padding: 8,
    borderRadius: 50,
  },

  item_senha:{
    marginTop: 20,
    marginLeft: 20,
    height: 80,
    marginHorizontal: 80
  },

  textSenha:{
    
    marginTop: -15,
    marginLeft: 7,
    fontWeight: 'bold'
  },

  item_visualizar:{
    flexDirection: 'row',
    width: '90%',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',

  },

  inputSenha: {
    
    backgroundColor: '#F4F3F3',
    width: '115%',
    height: 50,
    padding: 8,
    borderRadius: 50,
    
  },

  icon: {
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F3F3',
    borderRadius: 50,
    margin: '-15%',
  },

 esqueceu:{

    marginHorizontal: '10%',
    marginTop: '-3%',
    width: '30%',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black'
  },

  esqueci_senha:{
    height: '80%',
    fontSize: 12,
    textAlign: 'right',
    color: 'black'
  },
  
  naoTemConta:{
    marginHorizontal: '10%',
    marginTop: '-3%',
    width: '30%',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black'
  },

  cadastre:{
    alignItems:'flex-end',
  },
  
  botao:{

    marginTop: 10,
    marginLeft: 140,
    width: 90,
    height: 150,
    fontSize: 7,
    justifyContent: 'space-between',
    
    
  },
 
})





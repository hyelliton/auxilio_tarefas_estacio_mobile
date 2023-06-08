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
    
export default function CriarConta({navigation}){
  return(
    
    <LinearGradient style={{flex: 1}}
      colors={['#9FB9FC', '#FFF', '#9FB9FC']}>
        
      <View style={estilos.fundo}>
        <Image source={require('../Imagens/estacioTransparente.png')} 
        style={estilos.logo}></Image>

        <View style={estilos.espaco}>
          <Text style={estilos.titulo1}>Crie,</Text>
          <Text style={estilos.titulo2}>Sua conta!</Text>
        </View>

        <View style={estilos.janela}>
          <KeyboardAvoidingView 
            keyboardVerticalOffset={-500}
            behavior="padding"
            style={{flex: 1}}> 

            <ScrollView style={{flex: 1, marginTop: 50}}>
              <View style={estilos.item_email}>
                <Text style={estilos.textEmail}>EMAIL:</Text>
                <TextInput style={estilos.inputEmail} placeholder={'Digite seu email'}></TextInput>
              </View>

              <View style={estilos.item_matricula}>
                <Text style={estilos.textMatricula}>MATRÍCULA:</Text>
                <TextInput style={estilos.inputMatricula} placeholder={'Digite sua matrícula'}></TextInput>
              </View>

              <View style={estilos.item_senha}>
                <Text style={estilos.textSenha}>SENHA:</Text>
                <View style={estilos.inputArea}>
                  <TextInput style={estilos.inputSenha} placeholder={'Digite sua senha'}/>
                  <TouchableOpacity style={estilos.icon}>
                    <Ionicons 
                      name="eye" 
                      color="grey"
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
              </View>
                
              <View style={estilos.botao}>
                <Button title=" CADASTRE"
                        color='#B0C4DE'
                        onPress={ () => navigation.navigate('Comecar')}/>
              </View>
            </ScrollView>      
          </KeyboardAvoidingView>     
        </View>
      </View>
    </LinearGradient>
  );
}
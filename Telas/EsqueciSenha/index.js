import {View, Image, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity, TextInput,  KeyboardAvoidingView, ScrollView} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import estilos from './style';

export default function Recupere({navigation}){
  return(

    <LinearGradient
    style={{flex: 1}}
    colors={['#9FB9FC', '#FFF', '#9FB9FC']}>
    
        <View style={estilos.fundo}>
            <Image source={require('../Imagens/estacioTransparente.png' )} style={estilos.logo}></Image>

            <View style={estilos.espaco}>
                <Text style={estilos.titulo1}>Recupere</Text>
                <Text style={estilos.titulo2}> Sua senha!</Text>
            </View>
                
            <View style={estilos.janela}>
                <KeyboardAvoidingView 
                    keyboardVerticalOffset={-500}
                    behavior="padding"
                    style={{flex: 1}}> 

                    <ScrollView style={{flex: 1}}>

                        <View >
                            <Text style={estilos.titulo}>
                                PARA DEFINIR SUA SENHA, INFORME{'\n'}
                                O E-MAIL CADASTRADO NA SUA{'\n'}
                                CONTA E LHE ENVIAREMOS{'\n'}
                                UM LINK COM AS INSTRUÇÕES.{'\n'}{'\n'}
                            </Text>
                        </View>

                        <View style={estilos.item_email}>
                            <Text style={estilos.textEmail}>EMAIL:</Text>
                            <TextInput style={estilos.textCampo} 
                            placeholder={'Digite seu email'} ></TextInput>
                        </View>
                        
                        <View style={estilos.botao}>
                            <Button title="ENVIAR" color= '#9FB9FC' onPress={() => navigation.navigate('FazerLogin')} />
                        </View> 

                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </View>
    </LinearGradient>
  );
}
import {View, Image, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity, TextInput} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Recupere({navigation}){
  return(

    <LinearGradient
    style={{flex: 1}}
    colors={['#9FB9FC', '#9FB9FC', '#9FB9FC']}>
    
        <View style={estilos.fundo}>
            <Image source={require('../Imagens/estacioTransparente.png' )} style={estilos.logo}></Image>

            <View style={estilos.espaco}>
                <Text style={estilos.titulo1}>Recupere</Text>
                <Text style={estilos.titulo2}>Sua senha!</Text>
            </View>
                
            <View style={estilos.janela}>

                <View >
                    <Text style={estilos.titulo}>
                        PARA DEFINIR SUA SENHA, INFORME{'\n'}
                        O E-MAIL CADASTRADO NA SUA{'\n'}
                        CONTA E LHE ENVIAREMOS{'\n'}
                        UM LINK COM AS INSTRUÇÕES.
                    </Text>
                </View>

                <View style={estilos.item_email}>
                    <Text style={estilos.textEmail}>EMAIL:</Text>
                    <TextInput style={estilos.textCampo} 
                    placeholder={'Digite seu email'} ></TextInput>
                </View>
                
                <TouchableOpacity 
                    onPress = {() => navigation.navigate('cadastroDeConta')}
                    style={estilos.bottonLogoStyle}
                    activeOpacity={0.5}>
                <Image source={require('../Imagens/logoReturn2.png' ) } 
                style={estilos.  logoReturn}></Image>
                </TouchableOpacity>
                
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
        width: 100,
        height: 80,
        alignSelf: 'center',
        marginTop: 10
    },

    espaco:{
        marginTop: 30,
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
        width: '100%',
        justifyContent: 'center',
        
    },

    titulo: {
        marginTop: -150,
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },

    textEmail:{
        marginTop: 5,
        marginLeft: 7,
        fontWeight: 'bold'
    },

    item_email:{
        marginHorizontal: 25,
        height: 80,
        marginLeft: 20,
        marginTop: 20
        
    },

    textCampo: {
    
        backgroundColor: '#F4F3F3',
        width: '85%',
        height: 50,
        padding: 8,
        borderRadius: 50,
    },

    logoReturn:{
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 30,
        right: '-3%',
        bottom: '-272%'
    }
  
})
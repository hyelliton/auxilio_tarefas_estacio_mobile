import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import estilos from './style';

export default function Home({navigation}){
  return(

      
    <LinearGradient
        style={{flex: 1}}
        colors={['#9FB9FC', '#FFF', '#9FB9FC']}>

        <View style={estilos.fundo}>
            <Image source={require('../Imagens/estacioTransparente.png' )} style={estilos.logo}></Image>
            
            <View style={estilos.espaco}>
                <Text style={estilos.titulo1}>Veja</Text>
                <Text style={estilos.titulo2}>aqui suas Atividades!</Text>
            </View>
            
            <View style={estilos.janela}>

                <TouchableOpacity 
                        onPress = {() => navigation.navigate('')}
                        style={estilos.bottonDiarias}
                        activeOpacity={0.5}>

                    <View style={estilos.bordaDiaria}>
                        <Image source={require('../Imagens/diarias.png' ) } 
                        style={estilos.logoReturndiaria}></Image>
                        
                        <Text style={estilos.diarias}>Diarias</Text>
                        
                    </View>
                </TouchableOpacity>

                <View style={estilos.bordaSemanal}>
                     <Image source={require('../Imagens/semanais.png' ) } 
                        style={estilos.logoReturnsemanais}></Image>
                    <TouchableOpacity 
                        onPress = {() => navigation.navigate('')}
                        style={estilos.bottonSemanais}
                        activeOpacity={0.5}>
                        <Text style={estilos.semanais}>Semanais</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={estilos.bordaMensal}>
                    <Image source={require('../Imagens/mensais.png' ) } 
                    style={estilos.logoReturnmensais}></Image> 
                    <TouchableOpacity 
                        onPress = {() => navigation.navigate('')}
                        style={estilos.bottonMensais}
                        activeOpacity={0.5}>
                        <Text style={estilos.mensais}>Mensais</Text>
                    </TouchableOpacity>
                </View>

                <View style={estilos.botao}>
                <Button title="< 2023 >" color= '#B0C4DE'onPress={()=>navigation.navigate('')} />
                </View>

                <View style={estilos.botao1}>
                <Button title="< Abril >" color= '#B0C4DE'onPress={()=>navigation.navigate('')} />
                </View>
                
            </View>
        </View>
    </LinearGradient>
  );
}
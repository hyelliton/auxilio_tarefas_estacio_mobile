import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({

    fundo: {
      flex: 1
    },
  
    logo:{
      resizeMode: 'contain',
      marginTop: 22,
      marginLeft: 40
    },
  
    espaco:{
      marginTop: 70,
      marginLeft: 7
    },
  
    titulo1:{
  
      margin: 8,
      marginTop: 27,
      width: 175,
      height: 55,
      left: 5,
      fontSize: 25,
      color: 'black'
    },
  
    titulo2:{
      
      marginLeft: 10,
      marginTop: -28,
      width: 175,
      height: 55,
      fontSize: 25,
      color: 'black'
    },
  
    janela:{
      flex: 1,
      backgroundColor: 'white',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      justifyContent: 'center',
      
    },
  
    item_email:{
      marginHorizontal: 25,
      height: 80,
      marginLeft: 20,
      marginTop: 55,
    },
  
    textEmail:{
      marginTop: -35,
      marginLeft: 7,
      fontWeight: 'bold'
    },
  
    inputEmail: {
      backgroundColor: '#F4F3F3',
      borderRadius: 10,
      height: '35%',
      color: 'black',
      marginTop: 3,
      marginLeft: 7,
      margin: '10%',
      padding: 5
    },
  
    item_matricula:{
      marginTop: 20,
      marginLeft: 20,
      height: 80,
      marginHorizontal: 25
    },
  
    textMatricula:{
      marginTop: -60,
      marginLeft: 7,
      fontWeight: 'bold'
    },
  
    inputMatricula: {
      backgroundColor: '#F4F3F3',
      borderRadius: 10,
      height: '35%',
      color: 'black',
      marginTop: 3,
      marginLeft: 7,
      margin: '10%',
      padding: 5
    },
  
    item_senha:{
      marginTop: 20,
      marginLeft: 20,
      height: 80,
      marginHorizontal: 25
    },
  
    textSenha:{
      marginTop: -80,
      marginLeft: 7,
      fontWeight: 'bold'
    },
  
    inputArea: {
      flexDirection: 'row',
      margin: '10%',
      height: '35%',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      marginTop: 3,
      marginLeft: 7,
      marginRight: 42
    },
  
    inputSenha: {
      backgroundColor: '#F4F3F3',
      marginLeft: 40,
      borderRadius: 10,
      width:  300,
      height: 28,
      color: 'black',
      padding: 5
    },
  
    icon: {
      width: 35,
      height: 28,
      right: 35,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F4F3F3'
    },
  
    esqueci_senha:{
      marginHorizontal: '15%',
      height: '80%',
      fontSize: 12,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'right',
      color: 'black'
    },
    
    botao:{
      marginTop: 30,
      marginLeft: 115,
      width: 122,
      height: 40,
      fontSize: '5%',
      bottom: 70,
      padding: 2
    },
});
export default estilos
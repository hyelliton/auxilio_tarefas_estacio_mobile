import { StyleSheet } from "react-native";
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
      width: '100%',
      textAlign: 'center',
      justifyContent: 'center',
      border:'solid',
      color:'white',
      bordeRadios:12,
      top:110
    },
    
    inputamanhoplace: {
      
      backgroundColor: '#F4F3F3',
      width: '95%',
      height: 50,
      padding: 8,
      borderRadius: 50,
      fontWeight: 'bold',
      fontSize:15,
      top:-15
    },
  
    inputamanhoplace2: {
      
      backgroundColor: '#F4F3F3',
      width: '95%',
      height: 150,
      padding: 8,
      borderRadius: 50,
      fontWeight: 'bold',
      fontSize:15,
      top:-35
    },
  
    
    item_check:{
      
      marginHorizontal:25,
      height: 85,
      marginLeft: 58,
      marginTop:30,
      top:-100
    },
  
  
    bottondata: {
      textAlign:'center',
      marginTop:-240,
      marginLeft: 30,
      backgroundColor: '#F4F3F3',
      width: '81%',
      height: 50,
      padding: 8,
      borderRadius: 50,
      top:35,
      fontWeight: 'bold',
      fontSize:20
      
    },
  
    logoReturn:{
      width: 30,
      resizeMode: 'contain',
      alignSelf: 'center',
      height: 25,
      left:145 ,
      bottom:-35
      },
  
      lapisimagem:{
        width: 30,
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 25,
        bottom:305,
        right:299 
        },
  
        dadosimagem:{
          width: 30,
          resizeMode: 'contain',
          alignSelf: 'center',
          height: 25,
          bottom:220,
          right:299 
          },
  
  
      botaosalvar:{
        position: 'absolute',
        width: 150,
        height:40,
        fontSize: 7,
        justifyContent: 'center',
        right:103,
        bottom:30,
        padding: 2,
        borderRadius:12
        
      },
      adicionartitulo:{
      
        marginTop: 5,
        marginLeft: 7,
        fontWeight: 'bold',
        top:-15,
        right:-10
      },
  
      textdescricao:{
      
        marginTop: 5,
        marginLeft: 7,
        fontWeight: 'bold',
        top:-40,
        right:-10
      }
  
    
  })

  export default estilos
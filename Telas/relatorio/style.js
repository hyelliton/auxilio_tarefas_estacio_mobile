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
      marginTop:100
    },
  
    
    item_de:{
      
      marginHorizontal: 25,
      height: 80,
      marginLeft:60,
      marginTop:20,
      top:20
      
  
    },
  
    item_Ate:{
      
      marginHorizontal: 25,
      height: 80,
      marginLeft:60,
      marginTop: 20,
      top:-5
    },
  
  
    botaorelatorioativi: {
      textAlign:'center',
      marginTop:-50,
      marginLeft: 30,
      backgroundColor: '#F4F3F3',
      width: '85%',
      height: 55,
      padding: 8,
      borderRadius: 50,
      top:-45,
      fontWeight: 'bold',
      
    },
  
    
    Filtros:{
  
      marginHorizontal:100,
      height:85,
      top:-100,
      fontSize:18,
      left:45,
      fontWeight: 'bold',
    
  
    },
  
    Realizadas:{
  
      marginHorizontal:100,
      height:85,
      top:-20,
      fontSize:18,
      left:-35,
      fontWeight: 'bold',
    
  
    },
      
    Naorealizadas:{
  
      marginHorizontal:100,
      height:85,
      top:-40,
      fontSize:18,
      left:-15,
      fontWeight: 'bold',
    
  
    },
  
    inputde:{
      flexDirection:'row',
      backgroundColor:'#F4F3F3',
      width:'70%',
      height:50,
      padding:10,
      borderRadius:50,
      top:-35,
      marginLeft:18,
      marginHorizontal:55,
      marginRight:-55,
      right:-14,
      fontWeight: 'bold',
  
  
  },
  
  inputAte:{
    flexDirection:'row',
    backgroundColor:'#F4F3F3',
    width:'70%',
    height:50,
    padding:10,
    borderRadius:50,
    top:-35,
    marginLeft:23,
    marginHorizontal:55,
    marginRight:-55,
    right:-14,
    fontWeight: 'bold'
  
  
  },
  
   botaogerar:{
      position: 'absolute',
      width: 120,
      height:40,
      fontSize: 7,
      justifyContent: 'center',
      right:125,
      bottom:20,
      padding: 2
      
    },
  
  
    logoReturn:{
      width: 30,
      resizeMode: 'contain',
      alignSelf: 'center',
      height: 25,
      left:145 ,
      bottom:130,
      top:-10
    },
   
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
      marginLeft:-156,
      marginTop:100,
      margin: 10,
      left:30,
      top:53
    },
    checkbox2: {
      alignSelf: 'center',
      marginLeft:-156,
      marginTop:-160,
      margin: 10,
      left:30,
      top:163
    }
  
  });
  export default estilos
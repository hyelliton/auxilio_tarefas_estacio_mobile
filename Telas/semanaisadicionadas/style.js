import { StyleSheet } from "react-native";

 estilos = StyleSheet.create({

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
    },
  
    
    item_check:{
      
      marginHorizontal:25,
      height: 85,
      marginLeft: 58,
      marginTop:-20,
      top:50
    },
  
  
    bottondata: {
      textAlign:'center',
      marginTop:-135,
      marginLeft: 30,
      backgroundColor: '#F4F3F3',
      width: '81%',
      height: 50,
      padding: 8,
      borderRadius: 50,
      top:35,
      fontWeight: 'bold'
    },
  
    logoReturn:{
      width: 30,
      resizeMode: 'contain',
      alignSelf: 'center',
      height: 25,
      left:145 ,
      bottom:130
      }
  
    
  })
  
  const styles = StyleSheet.create({
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
      marginTop:-525,
      margin: 10,
    },
    checkbox2: {
      alignSelf: 'center',
      marginLeft:-156,
      marginTop:-435,
      margin: 10,
    },
    checkbox3: {
      alignSelf: 'center',
      marginLeft:-156,
      marginTop:-345,
      margin: 10,
    },
      checkbox4: {
      alignSelf: 'center',
      marginLeft:-156,
      marginTop:-250,
      margin: 10,
    }
    
  });
  export default estilos
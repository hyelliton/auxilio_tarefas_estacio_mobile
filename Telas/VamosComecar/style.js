import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({

    janela:{
      flex: 1,
      alignItems:'center',
      
    },
  
    titulo: {
      textAlign: 'center',
      marginTop: "-20%",
      marginLeft: "8%",
      margin: '-3%',
      fontSize: 15,
      fontWeight: 'bold',
      
    },
  
    item_login:{
      textAlign: 'left',
      width: '90%',
      height:'80%'
    }, 
    titulo1:{
      margin: '-12%',
      marginTop: '18%',
      width: '44%',
      height: '10%',
      left: '17%',
      fontSize: 25,
      color: 'black',
      fontWeight: 'bold'
  
    },
    titulo2:{
      margin: '42%',
      marginTop: '10%',
      fontSize: 25,
      color: 'black',
      width: '65%',
      height: '10%',
      left: '-36%'
    },
    logo:{
      resizeMode: 'contain',
      alignSelf: 'center',
      marginTop: '10%'
    },
    logoReturn:{
      marginTop: '20%',
      resizeMode: 'contain',
      alignSelf: 'center'
    }
    
});
export default estilos
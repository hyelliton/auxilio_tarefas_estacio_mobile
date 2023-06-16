import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({

    fundo: {
      flex: 1,
    },
  
    logo:{
      resizeMode: 'contain',
      marginTop: 12,
      marginLeft: 80,
      width: 230,
    },
    
    janela:{
      flex: 1,
      backgroundColor: 'white',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      marginTop: 50,
      alignItems:'center',
      flexDirection: 'column'
    },
    
    item_login:{
      marginHorizontal: 25,
      height: 80,
      marginLeft: 20,
      marginTop: -50
  },

  bottonrealizadas: {
    textAlign:'center',
    marginTop:-160,
    marginLeft: 30,
    backgroundColor: '#F4F3F3',
    width: '85%',
    height: 55,
    padding: 8,
    borderRadius: 50,
    fontWeight: 'bold'
  },

  bottonrealizadas2: {
    textAlign:'center',
    marginTop:-35,
    marginLeft: 30,
    backgroundColor: '#F4F3F3',
    width: '85%',
    height: 55,
    padding: 8,
    borderRadius: 50,
  },

  bottonrealizadas3: {
    textAlign:'center',
    marginTop:-85,
    marginLeft:30,
    backgroundColor: '#F4F3F3',
    width: '109%',
    height: 55,
    padding: 8,
    borderRadius: 50,
    marginRight:-15
    
  },


  item_senha:{
    marginTop:25,
    marginLeft:35,
    height: 80,
    marginHorizontal: 80
  },


  item_visualizar:{
    flexDirection: 'row',
    width: '90%',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',

  },

  
  email:{

    marginHorizontal:30,
    height: 85,
    marginLeft:-230,
    marginTop:50,
    top:90,
    fontSize:18
  

  },

  inputemail:{
    flexDirection:'row',
    backgroundColor:'#F4F3F3',
    width:'-290%',
    height:50,
    padding:10,
    borderRadius:50,
    top:30,
    marginLeft:-250,
    marginHorizontal:55,
    marginRight:-55,
    right:-14


},
  
  
  botaoenviar:{
    position: 'absolute',
    width: 100,
    height:40,
    fontSize: 7,
    justifyContent: 'center',
    right:50,
    bottom:50,
    padding: 2
    
  },

  botaopdf:{
    position: 'absolute',
    width: 100,
    height:40,
    fontSize: 7,
    justifyContent: 'center',
    right:215,
    bottom:50,
    padding: 2
  
    
    
  },

  logoReturn:{
    width: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 25,
    left:145 ,
    bottom:130,
    top:160,
    }
   
});

export default estilos
  
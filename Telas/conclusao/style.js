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

espaco:{
  marginTop: 'auto',
},

titulo1:{
  margin: 8,
  marginTop: 17,
  marginLeft: 20,
  width: 175,
  height: 55,
  left: 5,
  fontSize: 30,
  color: 'black',
  top:-40
},

titulo2:{
  marginVertical: 5,
  marginTop: -12,
  marginLeft: 20,
  width: 250,
  height: 55,
  fontSize: 26,
  color: 'white',
  right:-4,
  top:-55
},

item_visto:{
  marginHorizontal: 25,
  marginLeft: 20,
  marginTop: '15%',
},

item_visto1:{
  marginTop: '5%',
},

conclusaovisualizada: {
  backgroundColor: '#F4F3F3',
  width: '100%',
  height:220,
  padding: 8,
  borderRadius: 50,
  marginTop:-45
},

janela:{
  flex: 1,
  backgroundColor: 'white',
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
  justifyContent: 'center',
},
  
email:{
  marginLeft:100,
  fontSize:18,
  left:-50,
  fontWeight: 'bold'
},
  
inputemail:{
  backgroundColor: '#F4F3F3',
  width: '85%',
  height: 50,
  padding: 8,
  borderRadius: 50,
  marginLeft: 25
},
    
botaoconfirmar:{
  marginTop: 20,
  marginLeft: 127,
  width: 120,
  fontSize: 7,
},

logoReturn:{
  width: 30,
  resizeMode: 'contain',
  alignSelf: 'center',
  height: 25,
  left:150 ,
  bottom:10,
},
});

export default estilos
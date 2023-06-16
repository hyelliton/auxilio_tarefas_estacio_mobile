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

  item_check:{
    flexDirection: 'row',
    marginHorizontal: 'auto',
    height: 80,
    marginLeft: 'auto',
    top: -80,
  },

  checkbox: {
    alignSelf: 'center',
    marginTop:-25,
    margin: 20,
    marginBottom: 10,
    borderRadius: 100,
  },

  Filtros:{
    top: 35,
    left: -220,
    fontSize:18,
    fontWeight: 'bold',
  },

  Realizadas:{
    width: '80%',
    height: 80,
    padding: 8,
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
    top: -35,
    width: '40%',
    height: '100%',
    margin: 15
    
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default estilos
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
    top:110
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

  item_check:{
    flexDirection: 'row',
    marginHorizontal: 60,
    height: 80,
    marginLeft: 40,
    top:80,
    
  },

  checkbox: {
    alignSelf: 'center',
    marginTop:-25,
    margin: 5,
    marginBottom: 10,
    borderRadius: 100
    
  },

  inputamanhoplace: {
    backgroundColor: '#F4F3F3',
    width: '95%',
    height: 50,
    padding: 8,
    borderRadius: 50,
  },

  boxVoltar:{
    marginTop: '30%',
    marginLeft: '50%',
    marginEnd: '50%',
  },

  bottomVoltar:{
    marginLeft: '50%',
    marginEnd: '50%',
  },

  logoReturn:{
    width: 30,
    alignSelf: 'center',
    height: 25,
  },
 
});

export default estilos
import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({

    fundo: {
        flex: 1
    },

    logo:{
        width: 100,
        height: 80,
        alignSelf: 'center',
        marginTop: 10
    },

    espaco:{
        marginTop: 30,
    },
    
    titulo1:{
        margin: 8,
        marginTop: 17,
        marginLeft: 20,
        width: 175,
        height: 55,
        left: 5,
        fontSize: 25,
        color: 'black'
    },
    
    titulo2:{
        marginVertical: 5,
        marginTop: -12,
        marginLeft: 20,
        width: 250,
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

    titulo: {
        marginTop: 80,
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },

    textEmail:{
        marginTop: 5,
        marginLeft: 7,
        fontWeight: 'bold'
    },

    item_email:{
        marginHorizontal: 25,
        height: 80,
        marginLeft: 20,
        marginTop: 20
        
    },

    textCampo: {
    
        backgroundColor: '#F4F3F3',
        width: '85%',
        height: 50,
        padding: 8,
        borderRadius: 50,
    },

    botao:{
        marginTop: 15,
        marginLeft: 140,
        width: 90,
        fontSize: 7,
        
    },
});

export default estilos
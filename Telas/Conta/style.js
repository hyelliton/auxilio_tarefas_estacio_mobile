import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({

    bordaDiaria:{

        borderRadius: 8,
        borderWidth: 2,
        padding: 10,
        margin: 40,
        height: 50,
        width: '80%',
        borderColor: '#9FB9FC',
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
    },

    bordaSemanal:{
        borderRadius: 8,
        borderWidth: 2,
        padding: 10,
        margin: 38,
        height: 50,
        width: '80%',
        borderColor: '#9FB9FC',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        
    },
    
    bordaMensal:{

        borderRadius: 8,
        borderWidth: 2,
        padding: 10,
        margin: 38,
        height: 50,
        width: '80%',
        borderColor: '#9FB9FC',
        marginTop: -10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        
    },

    fundo: {
        flex: 1
    },

    logo:{
        resizeMode: 'contain',
        marginTop: 12,
        marginLeft: 80,
        width: 230,
    },
    
    espaco:{
        marginTop: 30,
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

    diarias:{
        // marginHorizontal: '10%',
        // marginLeft: 80,
        // right: '1%',
        // bottom:'100%',
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        
    },

    semanais:{
        // marginHorizontal: '10%',
        // marginLeft: 80,
        // right: '1%',
        // bottom: -20,
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        
    },

    mensais:{
        // marginHorizontal: '10%',
        // marginLeft: 80,
        // right: '1%',
        //bottom: -70,
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        
    },

    botao:{
        position: 'absolute',
        justifyContent: 'center',
        height: '205%',
        borderRadius: 20,
        right: '20%',
        bottom: '-8%',
    },

    botao1:{
        position: 'absolute',
        justifyContent: 'center',
        height: '205%',
        borderRadius: 20,
        right: '55%',
        bottom: '-8%'
    },

    logoReturndiaria:{
        // resizeMode: 'contain',
        // alignSelf: 'center',
        // height: 30,
        right: '220%',
        //bottom:'23%'
    },

    logoReturnsemanais:{
        
        // alignSelf: 'center',
        // resizeMode: 'contain',
        // height: 30,
        right: '200%',
        // bottom:'13%'
    },

    logoReturnmensais:{
        // resizeMode: 'contain',
        // alignSelf: 'center',
        // height: 30,
        right: '210%',
        // bottom: '4%'
    },
    
});

export default estilos
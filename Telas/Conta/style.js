import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({

    bordaDiaria:{

        borderRadius: 8,
        borderWidth: 2,
        padding: 10,
        margin: 30,
        height: 50,
        width: '80%',
        borderColor: '#9FB9FC',
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        marginLeft: '80%',
        marginRight: '80%'
    },

    bordaSemanal:{
        borderRadius: 8,
        borderWidth: 2,
        padding: 10,
        height: 50,
        width: '80%',
        borderColor: '#9FB9FC',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
    },
    
    bordaMensal:{
        borderRadius: 8,
        borderWidth: 2,
        padding: 10,
        height: 50,
        width: '80%',
        borderColor: '#9FB9FC',
        marginTop: 30,
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
        right: '80%',
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
    },

    semanais:{
        right: '80%',
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
    },

    mensais:{
        right: '80%',
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
        right: '150%',
        marginRight: '20%'
    },

    logoReturnsemanais:{
        right: '100%',
        marginRight: '20%'
    },

    logoReturnmensais:{
        right: '100%',
        marginRight: '20%'
        
    },
    
});

export default estilos
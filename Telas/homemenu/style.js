import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({

    image:{
        height: 130,
        marginTop: 30,
        width: 130,
        borderRadius: 100,
        alignSelf: 'center',
        padding: 30,
        marginBottom: 60,
        borderColor: 'white',
        backgroundColor: 'gray'
        },

    imagerelatorio:{
        right:5,
        top:-400,
        padding: 10,
        margin: 40,
        height: 50,
        width: '80%',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
    },
    botaorelatorio:{
        marginHorizontal: '10%',
        marginLeft: 80,
        right: '470%',
        bottom:'80%',
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        top:3
        
    },

    imageevento:{
        right:-25,
        padding: 10,
        margin: 38,
        height: 50,
        width: '80%',
        marginTop: -240,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        top:-30,
        
    },

    botaoevento:{
        marginLeft:-60,
        right: '1%',
        bottom: -20,
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        top:3
        
    },

    fundo: {
        flex: 1
    },
    
    espaco:{
        marginTop: 30
    },

    janela:{
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems:'center'
    },

    titulo1:{
        margin: 8,
        marginTop: 17,
        marginLeft: 20,
        width: 175,
        height: 55,
        left: 100,
        fontSize: 22,
        color: 'black',
        top:-80
    },


    logoReturnrelatorio:{
        // resizeMode: 'contain',
        // alignSelf: 'center',
        // height: 30,
        right: '220%',
        //bottom:'23%'
    },

    logoReturnevento:{
        
        // alignSelf: 'center',
        // resizeMode: 'contain',
        // height: 30,
        right: '200%',
        // bottom:'13%'
    },

    logoReturn:{
        width: 30,
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 25,
        left:-60 ,
        bottom:-90
        },

        botaologout:{

        borderRadius: 8,
        borderWidth: 2,
        padding: 10,
        margin: 38,
        height: 50,
        width: '80%',
        borderColor: '#9FB9FC',
        marginTop: 10,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        top:200,
        left:-155

        
    },
    
})
export default estilos
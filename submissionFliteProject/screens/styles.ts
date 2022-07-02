import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {

        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    button:{
        margin: 10,
        // backgroundColor:'#ffc107',
        elevation: 0,
        padding: 10,
        color:'white',
        borderWidth: 2,
        paddingHorizontal: 20,
        paddingVertical:20

    },
    buttonText:{
        // color: 'white',
        fontSize:16
    },
    title: {
        fontSize: 24,
        color:'black',
        fontWeight:'bold'
    }
})

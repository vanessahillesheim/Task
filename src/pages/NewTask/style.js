import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: "#fff",
        paddingTop: 20

    },
          label:{
        width: "90%",
        marginTop: 20, 
        marginLeft:20,
        fontSize: 16, 
        color: "#f92e6a"
    }, 
    inputText:{
        width: "90%", 
        marginTop: 10, 
        padding: 10, 
        height: 50, 
        borderBottomWidth: 1, 
        borderBottomColor: "f92e6a", 
        marginHorizontal: 'auto'
    }, 
    buttonNewTask: {
        position: "absolute", 
        width: 60, 
        height: 60, 
        bottom: 30, 
        left: 20, 
        backgroundColor: "#F92e6a", 
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'

    },

    iconButton: {
        color: "#ffffff",
        fontSize: 16, 
        fontWeight: 'bold'
    }, 
}

)
export default styles;
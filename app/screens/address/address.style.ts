import { StyleSheet, ViewStyle } from "react-native";

interface Styles{
    marginHorizontal: ViewStyle,
    buttonIconAdd:ViewStyle,
    buttonIconAddLabelStyle:ViewStyle,
    readyButtonStyle:ViewStyle,
    readyButtonLabelStyle:ViewStyle,
    buttonIconRemove:ViewStyle

 
}


export const addressStyle = StyleSheet.create<Styles>({
    marginHorizontal:{
      marginHorizontal:10
    },
    buttonIconAdd:{    
        position:'absolute', 
        right:-15,
        top:2
              
    },
    buttonIconAddLabelStyle:{
        fontSize:30
    },
    readyButtonStyle:{
        margin:10,
        marginTop:80,
        height: 50,
        paddingVertical:3
    },
    readyButtonLabelStyle:{
        fontSize:18
    },
    buttonIconRemove:{
        opacity: 0.7

    }
})
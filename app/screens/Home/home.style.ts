import { StyleSheet, ViewStyle } from "react-native";
import { theme } from "../../../App.styles";


interface Styles{
    flex: ViewStyle,
    fab:ViewStyle, 
    markerImage:ViewStyle  
    
}



export const HomeStyles = StyleSheet.create<Styles>({
    flex:{
        flex:1
    },
    fab:{
        position: 'absolute',
        right: 0,
        bottom: 0,
        margin: 16
    } ,
    markerImage:{
        width: 35,
        height: 35
    }  
})

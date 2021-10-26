import { StyleSheet, ViewStyle } from "react-native";

interface Styles{
    content: ViewStyle,
    view: ViewStyle,
    cardTitle: ViewStyle,
    cardButton:ViewStyle
}
export const LoginStyle = StyleSheet.create<Styles>({
    content:{
        display: "flex",
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'rgb(101,37,131)'
    },
    view:{
        width:"80%"
    },
    cardTitle:{
        color:'rgb(10,37,131)'
       
        
    },
    cardButton:{
        marginVertical:2
    }

})
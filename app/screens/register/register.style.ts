import { StyleSheet, ViewStyle } from "react-native";
import { theme } from "../../../App.styles";

interface Styles{
    content: ViewStyle,
    icon: ViewStyle ,
    button: ViewStyle  
}

export const RegisterStyle = StyleSheet.create<Styles>({
    content:{
        padding: 15,
        paddingTop:10
    },
    icon:{color:theme.colors.primary},
    button:{
        margin: 15,
        marginHorizontal:0
    }
});
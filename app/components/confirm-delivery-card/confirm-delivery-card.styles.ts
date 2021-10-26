import { StyleSheet, ViewStyle } from "react-native";
import { theme } from "../../../App.styles";



interface Styles{icon: ViewStyle,cancelButton: ViewStyle}


export const ConfirmDeliveryCardStyle=StyleSheet.create<Styles>({        
    icon:{
        color: theme.colors.primary,
        marginTop:20
    },
    cancelButton:{
        marginBottom: 10

}})
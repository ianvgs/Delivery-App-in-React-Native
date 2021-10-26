import { StyleSheet, ViewStyle } from "react-native";
import { theme } from "../../../App.styles";

interface Styles{cancelDeliveryButton: ViewStyle,flexCenterColumn: ViewStyle,icon:ViewStyle,title:ViewStyle}

export const SearchingDeliveryCardStyle=StyleSheet.create<Styles>({
    icon:{
        color: theme.colors.primary,
        marginTop:20
    },
    flexCenterColumn:{
        display: "flex",
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
        flexDirection:'column'
    },
    cancelDeliveryButton:{
        position: 'absolute',
        margin: "2%",
        bottom: 0,
        width: "96%"
    },
    title:{
        margin: 20,
        marginTop:40,
        textAlign:'center',
        color: theme.colors.primary
    }
})
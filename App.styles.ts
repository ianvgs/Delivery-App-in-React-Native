import { DefaultTheme } from "react-native-paper";



export const theme = {

    ...DefaultTheme,

    colors:{
        ...DefaultTheme.colors, 
        primary: 'rgb(101,37,131)',
        //  \/ deixa o fundo dos botoes transparente
        background: "transparent"
    }
}
import * as React from 'react';
import { Appbar, Menu } from 'react-native-paper';
//import { headerStyle } from './header.style';


export type Props = {
    title: string ,
    hasBackButton?: boolean
  };



export const HeaderComponent:React.FC<Props>= (props) => {
    return(
        <Appbar>
            {
                props.hasBackButton?

                <Appbar.BackAction/>

                :

                <Menu 
                visible={true}
                onDismiss={()=>{}}
                anchor={
                    <Appbar.Action
                        icon="menu" 
                        color='#fff'/>
                }>
                </Menu>
                
            }
            
            <Appbar.Content title={props.title}/>
         </Appbar>
    )
}

interface HeaderComponentParams {
    title: string
}
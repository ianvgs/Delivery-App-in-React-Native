import * as React from 'react';
import { View } from 'react-native';
import { Button, Card, IconButton, List } from 'react-native-paper';
import { theme } from '../../../App.styles';
import { ConfirmDeliveryCardStyle } from './confirm-delivery-card.styles';


export const ConfirmDeliveryCardComponent:React.FC = () => {
    return(
        <Card>
            <Card.Content>
                <List.Item title="15,00"
                description="total price of delivery"
                left={()=>
                    <IconButton 
                        style={ConfirmDeliveryCardStyle.icon} 
                        color={theme.colors.primary} 
                        icon="bike" 
                        size={30}/>} 
                right={()=>
                    <View>
                        <Button 
                            style={ConfirmDeliveryCardStyle.cancelButton}>Cancelar</Button>
                        <Button 
                            mode="contained" >Confirmar</Button>
                    </View>                                               
                }
                />
            </Card.Content>
        </Card>
    )
}
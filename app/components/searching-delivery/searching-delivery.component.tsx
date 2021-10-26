import * as React from 'react';
import { ActivityIndicator,  View } from 'react-native';
import { Title,Button } from 'react-native-paper';
import { theme } from '../../../App.styles';
import { SearchingDeliveryCardStyle } from './searching.delivery.style';

export const SearchingDeliveryComponent:React.FC = () => {
    return(
        <>
        <View style={SearchingDeliveryCardStyle.flexCenterColumn}>
                <ActivityIndicator 
                    color={theme.colors.primary}
                    animating={true}/>
                <Title 
                    style={SearchingDeliveryCardStyle.title} >  Seaching deliverers in your region   </Title>
                <Button 
                    style={SearchingDeliveryCardStyle.cancelDeliveryButton} 
                    mode="contained">  Cancel   
                </Button>
        </View>
        </>
    )
}
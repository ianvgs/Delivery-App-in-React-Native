import React from 'react';

import { SafeAreaView, View, ViewBase } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';
import { theme } from '../../../App.styles';
import { HeaderComponent } from '../../components/header-component/header.component';
import { addressStyle } from './address.style';

const AddressScreen:React.FC =()=>{

    const destinations: number[] =[1,2]



    return(
        <SafeAreaView>
            <HeaderComponent title="Address" hasBackButton={true}/>
                <View style={addressStyle.marginHorizontal}>
                    <TextInput label="Origin" />
                    {
                    destinations.map((destination:number,index:number)=>

                    <TextInput 
                        label="Destination"
                        key={`destination${index}`}
                        right={
                                destinations.length>1?
                                 <TextInput.Icon 
                                    name="close"
                                    color={theme.colors.primary}
                                    style={addressStyle.buttonIconRemove}/>
                                :null
                        } />

                    )
                    }
                    

                </View>
                <View>
                    <Button 
                    style={addressStyle.buttonIconAdd}
                    icon="plus"
                    labelStyle={addressStyle.buttonIconAddLabelStyle}>
                    </Button>
                </View>
                <Button
                mode="contained"
                uppercase={false}
                style={addressStyle.readyButtonStyle}
                labelStyle={addressStyle.readyButtonLabelStyle}>
                    Ready
                </Button>
           
        </SafeAreaView>

    )
}

export default AddressScreen;
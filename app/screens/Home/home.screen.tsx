import * as React from 'react';
import { SafeAreaView, Image} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {  FAB, } from 'react-native-paper';


import { ConfirmDeliveryCardComponent } from '../../components/confirm-delivery-card/confirm-delivery-card.component';
import { HeaderComponent } from '../../components/header-component/header.component';
import { SearchingDeliveryComponent } from '../../components/searching-delivery/searching-delivery.component';
import { HomeStyles } from './home.style';

const HomeScreen:React.FC= () => {
    const state:number = 1; 

    return(
        <SafeAreaView style={HomeStyles.flex}>

            <HeaderComponent title="Delivery App"/>

            <MapView
            style={HomeStyles.flex}                
            initialRegion={{
                latitude: -3.722,
                longitude:-38.515,
                latitudeDelta:0.09,
                longitudeDelta:0.04
            }}>

            {state === 2? 
                        <>
                        <Marker
                            description="Origin person"
                            coordinate={{latitude:-3.723, longitude:-38.515}}
                            >                     
                        </Marker>

                        <Marker
                            description="destination person"
                            coordinate={{latitude:-3.715, longitude:-38.515}}>                         
                        </Marker>               
                        </>   
            :null}

            {state === 1? 
                        <>
                        <Marker
                            description="Delivery Person1"
                            coordinate={{latitude:-3.723, longitude:-38.515}}>
                                <Image source={require('../../assets/imagens/bike.png')}
                                style={{width:35,height:35}}                    
                                />   
                        </Marker>

                        <Marker
                            description="Delivery Person1"
                            coordinate={{latitude:-3.715, longitude:-38.515}}>
                                <Image source={require('../../assets/imagens/bike.png')}
                                style={{width:35,height:35}}                    
                                />   
                        </Marker>

                        <Marker
                            description="Delivery Person1"
                            coordinate={{latitude:-3.703, longitude:-38.515}}>
                                <Image source={require('../../assets/imagens/bike.png')}
                                style={{width:35,height:35}}                    
                                />   
                        </Marker>
                        </>   
            :null}

            </MapView>
            

            {state===1?
                         <FAB style={HomeStyles.fab} icon="plus"/>
            :null}

            {state===2?
             <ConfirmDeliveryCardComponent/>
            :null}
            
            {state ===3?  
            <SearchingDeliveryComponent/> 
            :null}

        </SafeAreaView>

    )
}

export default HomeScreen;
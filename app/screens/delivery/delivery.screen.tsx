import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Avatar, Card, List } from 'react-native-paper';
import { HeaderComponent } from '../../components/header-component/header.component';
import { deliveryStyle } from './delivery.style';

const DeliveryScreen:React.FC=()=>{
    return(
        <SafeAreaView style={deliveryStyle.flex}>
               <HeaderComponent title={"Delivery details"} hasBackButton={true}/>

                    <View style={deliveryStyle.flex}>
                        <MapView 
                        style={deliveryStyle.flex}
                        initialRegion={{
                            latitude: -3.722,
                            longitude:-38.515,
                            latitudeDelta:0.09,
                            longitudeDelta:0.04
                        }}>
                        </MapView>
                    </View>
                    <Card>
                        <Card.Title 
                        title={"99/99/9999"}
                        right={()=><Text>$30,00</Text>}/>

                        <Card.Content>
                            <List.Item
                            title={"Ian Guedes"}
                            description="53 deliveries"
                            left={()=>
                                <Avatar.Image
                                    size={52}
                                    source={{uri:"https://png.pngtree.com/pgn-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"}}/>  }
                            />
                            <List.Item
                                title="Origin"
                                description="Origin Street,60"
                                left={() =>
                                    <List.Icon icon="flag-outline" />
                            }/>
                             <List.Item
                                title="Destination"
                                description="Destinatio Street,60"
                                left={() =>
                                    <List.Icon icon="flag-checkered" />
                            }/>
                        </Card.Content>

                    </Card>
        </SafeAreaView>
    )
}

export default DeliveryScreen;
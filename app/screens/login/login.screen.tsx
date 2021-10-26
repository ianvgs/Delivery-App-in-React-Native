import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { LoginStyle } from './login.style';

export const LoginScreen: React.FC = () =>{
    
    return(

        <SafeAreaView style={LoginStyle.content} >
            <View style={LoginStyle.view}>
            <Card>
                <Card.Title style={LoginStyle.cardTitle}title="Delivery App"></Card.Title>
                <Card.Content>
                    <TextInput label="Email" keyboardType="email-address"></TextInput>
                    <TextInput label="Password" secureTextEntry={true}></TextInput>
                    <Button uppercase={false} style={LoginStyle.cardButton}>Forgot email/password</Button>
                    <Button mode="contained" style={LoginStyle.cardButton}> Login </Button>
                    <Button style={LoginStyle.cardButton}>Register</Button>

                </Card.Content>
            </Card>
            </View>
        </SafeAreaView>
    );
}
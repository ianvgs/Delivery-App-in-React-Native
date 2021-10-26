import { SafeAreaView, ScrollView, View } from "react-native"
import * as React from 'react';
import { Button, TextInput } from "react-native-paper";
import { RegisterStyle } from "./register.style";
import { HeaderComponent } from "../../components/header-component/header.component";


export const RegisterScreen:React.FC = () => {
    return(
        <SafeAreaView>
            <ScrollView>
                    <HeaderComponent title="register"/>   

                    <View style={RegisterStyle.content}>
                    <TextInput label="Name"/>
                    <TextInput label="Email" keyboardType="email-address"/>
                    <TextInput label="Password" secureTextEntry={true}  right={<TextInput.Icon name="eye-off-outline" color='rgb(101,37,131)' />} />
                    <TextInput label="Confirm Password" secureTextEntry={true}  right={<TextInput.Icon name="eye-off-outline" color='rgb(101,37,131)' />} />
                    <TextInput label="Phone Number" keyboardType="phone-pad"/>
                    <Button mode="contained" style={RegisterStyle.button}>Register</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

};
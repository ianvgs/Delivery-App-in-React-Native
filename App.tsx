import * as React from 'react';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { theme } from './App.styles';
import AddressScreen from './app/screens/address/address.screen';
import DeliveryScreen from './app/screens/delivery/delivery.screen';
import HomeScreen from './app/screens/Home/home.screen';
import { RegisterScreen } from './app/screens/register/register.screen';
import { LoginScreen } from './app/screens/login/login.screen';


const App = () =>{

  return(   
      <PaperProvider theme={theme}>
         <HomeScreen/>
      </PaperProvider>   
  );
};

export default App;


//<TextInput label="example test" ></TextInput>r
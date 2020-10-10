import React from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import StartScreen from "./StartScreen/StartScreen";
import TicketScreen from "./TicketScreen/TicketScreen";


const Stack = createNativeStackNavigator();

const Application = () => <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="TicketScreen" component={TicketScreen} options={{stackPresentation: 'modal'}}/>
    </Stack.Navigator>
</NavigationContainer>

export default class StockApp extends React.Component {
    render() {
       return <View style={{flex:1}}>
           <Application/>
       </View>
    }
}


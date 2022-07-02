import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainScreen from '../screens/MainScreen';
import AlternateScreen from '../screens/AlternateScreen';
type Props = { }
const Stack = createNativeStackNavigator()

const Index = (props: Props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen options={{headerTitleAlign:'center'}} name="Home" component={MainScreen} />
                <Stack.Screen options={{animation:'slide_from_right'}} name="Alternate" component={AlternateScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Index;
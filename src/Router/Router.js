import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator }from'@react-navigation/stack'
import MaterialBottomTabNavigator from '../Router/MaterialBottomTabNavigator'
const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={MaterialBottomTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}

export default Router

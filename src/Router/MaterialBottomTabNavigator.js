import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const MaterialBottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Home"} component={ProfileScreen} />
            <Tab.Screen name={"Profile"} component={ProfileScreen} 
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default MaterialBottomTabNavigator

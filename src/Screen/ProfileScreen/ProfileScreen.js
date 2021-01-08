import React from 'react'
import {Text, View, SafeAreaView, Pressable } from 'react-native'
import { Auth } from 'aws-amplify'

import styles from'./styles'


const ProfileScreen = () => {
    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Pressable 
            onPress={
                signOut
            }
            style={{width:'100%',height:40,backgroundColor:'#c3c3c3',justifyContent:'center',alignItems:'center'}}>
                <Text>Log out</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default ProfileScreen

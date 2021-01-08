import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

import { withAuthenticator } from 'aws-amplify-react-native'
import Router from './src/Router/Router';


const App = () => {
  return (
    <Router/>
  )
}

export default withAuthenticator(App)



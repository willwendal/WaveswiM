// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import WeatherMain from './screens/weatherMain'
import WeatherDetail from './screens/weatherDetail'
import Map from './screens/map'
import Home from './screens/home'

const Stack = createStackNavigator()

export default function App () {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Map' component={Map} />
        <Stack.Screen name='WeatherMain' component={WeatherMain} />
        <Stack.Screen name='WeatherDetail' component={WeatherDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1faee',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

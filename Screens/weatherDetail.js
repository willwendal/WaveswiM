import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native';


export default function WeatherDetail() {

  
  return (
  
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/waveswim_background.png')}
        style={{width: '100%', height: '100%'}}
      > 
      <View>
        <Text>Weather Details</Text>
      </View>
      </ImageBackground>
    </View> 
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1faee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

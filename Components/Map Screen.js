import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const lat = 58.7984;
const lng = 17.8081;
const params = 'waveHeight,airTemperature';

export default function MapScreen() {

  const [marineWeather, setMarineWeather] = useState([]);

  useEffect(() => {
    fetch( process.env.seaWeatherAPI, {
      headers: {
        'Authorization': process.env.APIKey
      }
    })
    .then((response) => response.json())
    .then((jsonData) => { setData(jsonData) });     //console logged data here and its working
  })
  
  return (
  
    <View style={styles.container}>
      <FlatList 
        data = {marineWeather}
        renderItem = { ({item}) => (
          <Text>{item.name}</Text>
        )}
      />
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

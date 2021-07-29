import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const lat = 58.7984;
const lng = 17.8081;
const params = 'waveHeight,airTemperature';

export default function WeatherMain() {

  const [marineWeather, setMarineWeather] = useState([]);

  useEffect(() => {
    fetch( process.env.seaWeatherAPI, {
      headers: {
        'Authorization': process.env.APIKey
      }
    })
    .then((response) => response.json())
    .then((jsonData) => { setMarineWeather(jsonData) });   
  })
  
  return (
  
    <View style={styles.container}>
      <FlatList 
        data = {marineWeather}
        renderItem = { ({item}) => (
          <Text>{item}</Text>
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

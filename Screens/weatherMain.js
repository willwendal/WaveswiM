import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const lat = 41.376700;
const lng = 2.193972;
const params = 'visibility';
const start = '2021-07-29';
const end = '2021-07-30';
const API_URL = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${start}&end=${end}`;

export default function WeatherMain() {

  const renderItem = ({ item }) => {
    return <View>
      <Text> {item.visibility.sg} </Text>
    </View>
  }

  const [marineWeather, setMarineWeather] = useState([]);

  useEffect(() => {

    fetch( API_URL, {
      headers: {
        'Authorization': process.env.EXPO_APP_APIKEY
      }
    }
  )
    .then((response) => (response.json()))
    .then((jsonData) => { setMarineWeather(jsonData.hours) })
  },[])

  
  return (
  
    <View>
      <FlatList 
        data={ marineWeather }
        keyExtractor={(item) => item.time}
        renderItem={ renderItem }
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
    color: 'black',
  },
});

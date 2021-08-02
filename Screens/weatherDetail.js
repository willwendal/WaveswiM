import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { dataAverager } from '../helperFunctions/helperFunctions';
import { EXPO_APIKEY } from '@env';


const lat = 41.376700;
const lng = 2.193972;
const params = 'visibility';
const start = '2021-07-31';
const end = '2021-08-01';
const API_URL = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${start}&end=${end}`;


export default function WeatherDetail() {

  const renderItem = ({ item, index }) => {

    return <Text key={index} style={styles.weatherBar}>
        hiiiiiii
    </Text>
  } 

  const [marineWeather, setMarineWeather] = useState([]);

  useEffect(() => {
        
            fetch( API_URL, {
              headers: {
                'Authorization': EXPO_APIKEY,
              }
            }
          )
            .then((response) => (response.json()))
            .then((jsonData) => { 
              const dateAverage = dataAverager(jsonData.hours)  
              console.log(dateAverage)
              setMarineWeather(dateAverage)
            })
            .catch((err) => {err.message})
          },[])

  return (
  
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/waveswim_background.png')}
        style={{width: '100%', height: '100%'}}
      > 
      <View style={styles.weatherBar}>
      <View>
      <Text style={styles.header}>Barcelona
            28°C
          </Text>
      </View>
      <View>
        <FlatList
            style={styles.weatherBarRight} 
            data={ marineWeather }
            keyExtractor={(item) => item.time}
            renderItem={ renderItem }
          />  
      </View>
      </View>
      </ImageBackground>
    </View> 
    

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  header: {
    padding: 90,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
  },
  weatherBar: {
    flexDirection:  'row',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  weatherBarRight: {
    padding: 10,
    alignSelf: 'flex-end',
    marginRight: 20,
    color: 'white',
  },
});
import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { dataAverager } from '../helperFunctions/helperFunctions';
import { EXPO_APIKEY } from '@env';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const lat = 41.376700
const lng = 2.193972
const params = 'visibility,waterTemperature,currentDirection,currentSpeed,swellHeight,swellPeriod,swellDirection,cloudCover';
const start = '2021-08-03'
const end = '2021-08-04'
const API_URL = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${start}&end=${end}`

const keyGenerator = uuidv4().toString();

export default function WeatherDetail () {
  const renderItem = ({ item }) => {
  return  (

      <View keyExtractor={keyGenerator} >
        <Text style={styles.weatherValue}> {item.averageVis} </Text>
        <Text style={styles.weatherValue}> {item.averageWaterTemp} </Text>
        <Text style={styles.weatherValue}> {item.averageCurrentDirection} </Text>
        <Text style={styles.weatherValue}> {item.averageCurrentSpeed} </Text>
        <Text style={styles.weatherValue}> {item.averageSwellHeight} </Text>
        <Text style={styles.weatherValue}> {item.averageSwellPeriod} </Text>
        <Text style={styles.weatherValue}> {item.averageSwellDirection} </Text>
        <Text style={styles.weatherValue}> {item.averageCloudCover} </Text>
      </View>
    )
  }

  const [marineWeather, setMarineWeather] = useState({})

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: EXPO_APIKEY
      }
    }
    )
      .then((response) => (response.json()))
      .then((jsonData) => {
        const dataAverage = dataAverager(jsonData.hours)
        setMarineWeather([dataAverage])
      })
      .catch((err) => { err.message })
  }, [])


  return (
      
  <View style={styles.container}>
    <ImageBackground
      source={require('../assets/waveswim_background.png')}
        style={styles.image}
        resizeMode='cover'

    >
            
    <Text style={styles.header}>
      Barcelona
      28°C {'\n'}
      __________ 
      
    </Text>

    <View style={styles.containerWrapper}>
      <View style={styles.containerOne}>
      
        <Text style={styles.weatherKey}>Visibility</Text>
        <Text style={styles.weatherKey}>Water Temperature</Text>
        <Text style={styles.weatherKey}>Current Direction</Text>
        <Text style={styles.weatherKey}>Current Speed</Text>
        <Text style={styles.weatherKey}>Swell Height</Text>
        <Text style={styles.weatherKey}>Swell Period</Text>
        <Text style={styles.weatherKey}>Swell Direction</Text>
        <Text style={styles.weatherKey}>Cloud Cover</Text>
          
      </View> 
        
      <View style={styles.containerTwo} >
        
        <FlatList
          data={marineWeather}
          keyExtractor={(item) => item}
          renderItem={renderItem}
          
        /> 
          
      </View>    

    </View>  
        
    </ImageBackground>    
  </View>
      

  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  header: {
    padding: 90,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
  },
  containerWrapper: {
    flexDirection: 'row',
    flex: 1,
  },
  containerOne: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  containerTwo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  weatherKey: {
    padding: 20,
    color: 'white',
    fontFamily: 'Montserrat-Regular'
  },
  weatherValue: {
    padding: 24,
    color: 'white', 
    fontFamily: 'Montserrat-Regular'
  },
})

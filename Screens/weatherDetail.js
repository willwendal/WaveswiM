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
        <Text style={styles.weatherBarRight}> {item.averageVis} </Text>
        <Text style={styles.weatherBarRight}> {item.averageWaterTemp} </Text>
        <Text style={styles.weatherBarRight}> {item.averageCurrentDirection} </Text>
        <Text style={styles.weatherBarRight}> {item.averageCurrentSpeed} </Text>
        <Text style={styles.weatherBarRight}> {item.averageSwellHeight} </Text>
        <Text style={styles.weatherBarRight}> {item.averageSwellPeriod} </Text>
        <Text style={styles.weatherBarRight}> {item.averageSwellDirection} </Text>
        <Text style={styles.weatherBarRight}> {item.averageCloudCover} </Text>
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
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.weatherBar}>
          <View>
            <Text style={styles.header}>Barcelona
              28°C
            </Text>
          </View>
        
        <View >
          <Text style={styles.weatherBarLeft}>Visibility</Text>
          <Text style={styles.weatherBarLeft}>Water Temperature</Text>
          <Text style={styles.weatherBarLeft}>Current Direction</Text>
          <Text style={styles.weatherBarLeft}>Current Speed</Text>
          <Text style={styles.weatherBarLeft}>Swell Height</Text>
          <Text style={styles.weatherBarLeft}>Swell Period</Text>
          <Text style={styles.weatherBarLeft}>Swell Direction</Text>
          <Text style={styles.weatherBarLeft}>Cloud Cover</Text>
        </View>
        
        <View style={styles.weatherBarRight}>
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
    display: 'flex',
    flex: 1,
  },
  header: {
    padding: 90,
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  },
  weatherBar: {
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'

  },
  weatherBarLeft: {
    padding: 15,
    alignSelf: 'flex-start',
    marginTop: 35,
    color: 'white'
  },
  weatherBarRight: {
    padding: 12,
    alignSelf: 'flex-end',
    color: 'white',
    marginTop: 18,
    marginBottom: 18,
    alignSelf: 'baseline'
  
  },
  weatherBarLeftThree: {
    marginTop: 10
  }
})

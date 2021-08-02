import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { dataAverager } from '../helperFunctions/helperFunctions';
import { EXPO_APIKEY } from '@env';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const lat = 41.376700
const lng = 2.193972
const params = 'visibility,waterTemperature';
const start = '2021-08-02'
const end = '2021-08-03'
const API_URL = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${start}&end=${end}`

const keyGenerator = uuidv4().toString();

export default function WeatherDetail () {
  const renderItem = ({ item }) => {
   return  (
      <View key={keyGenerator}>
        <Text> {item.averageVis} </Text>
        <Text> {item.averageWaterTemp} </Text>
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
        console.log(dataAverage)
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
        </View>
        <View style={styles.weatherBarRight}>
        <FlatList
          data={marineWeather}
          keyExtractor={(item) => item}
          renderItem={renderItem}
        />
        </View>
      </ImageBackground>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1
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
  weatherBarRight: {
    padding: 10,
    alignSelf: 'flex-end',
    marginRight: 20,
    color: 'white'
  },
  weatherBarText: {
    margin: 20,
    color: 'white'
  }
})

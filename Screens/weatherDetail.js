import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native'
import { dataAverager } from '../helperFunctions/helperFunctions'
import { EXPO_APIKEY } from '@env'

const lat = 41.376700
const lng = 2.193972
const params = 'visibility'
const start = '2021-07-31'
const end = '2021-08-01'
const API_URL = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${start}&end=${end}`

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

export default function WeatherDetail () {
  const renderItem = ({ item }) => {
   return  (
      <View>
        <Text> {item.average} </Text>
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

  console.log('------jhhh---', marineWeather.average)

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
          keyExtractor={(item) => item.time}
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

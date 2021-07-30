import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native';


const lat = 41.376700;
const lng = 2.193972;
const params = 'visibility';
const start = '2021-07-29';
const end = '2021-07-30';
const API_URL = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${start}&end=${end}`;

const image = { uri: "https://docs.expo.io/static/images/tutorial/splash.png" };

export default function WeatherMain() {

  const renderItem = ({ item }) => {
    return <Text style={styles.weatherBar}> {item.visibility.sg} </Text>
            
        
  }

  const [marineWeather, setMarineWeather] = useState([]);

  useEffect(() => {

    fetch( API_URL, {
      headers: {
        'Authorization': "703528bc-ead9-11eb-80d0-0242ac130002-7035292a-ead9-11eb-80d0-0242ac130002"
      }
    }
  )
    .then((response) => (response.json()))
    .then((jsonData) => { console.log(jsonData), setMarineWeather(jsonData.hours) })
  },[])

  
  return (
  
    <View style={styles.container} >
      <ImageBackground
        source={require('../assets/waveswim_background.png')}
        style={{width: '100%', height: '100%'}}
      >
        
          <Text style={styles.header}>Barcelona
            28°C
          </Text>
          {/* <Text>28°C</Text> */}
        
        <FlatList 
          data={ marineWeather }
          keyExtractor={(item) => item.time}
          renderItem={ renderItem }
          />
      </ImageBackground>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
  },
  header: {
    padding: 100,
    textAlign: 'center',
    fontFamily: ''
  },
  weatherBar: {
    textAlign: 'right',
    padding: 20,
    fontFamily: "Cochin",
  }
});

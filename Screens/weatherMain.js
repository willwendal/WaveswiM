import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native';

const moment = require('moment');

let days = [];
let daysRequired = 6

for (let i = 0; i <= daysRequired; i++) {
  days.push( moment().add(i, 'days').format('dddd, Do MMMM') )
}


const lat = 41.376700;
const lng = 2.193972;
const params = 'cloudCover';
const start = '2021-07-31';
const end = '2021-08-01';
const API_URL = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${start}&end=${end}`;


export default function WeatherMain() {

  const renderItem = ({ item }) => {

  
    return <Text style={styles.weatherBar}> 
              {item.cloudCover.sg} 
            </Text>       
}

  const [marineWeather, setMarineWeather] = useState([]);

  useEffect(() => {

    fetch( API_URL, {
      headers: {
        'Authorization': .env,
      }
    }
  )
    .then((response) => (response.json()))
    .then((jsonData) => { console.log(jsonData.hours), setMarineWeather(jsonData.hours) })
    
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
        
        <View>
          {days.map((day) => {
            return <Text>{day}</Text>
          })}
          
        </View>
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
  },
  weatherBar: {
    textAlign: 'right',
    padding: 20,
  }
});

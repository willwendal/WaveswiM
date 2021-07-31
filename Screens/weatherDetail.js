import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native';


export default function WeatherDetail() {

  
  return (
  
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/waveswim_background.png')}
        style={{width: '100%', height: '100%'}}
      > 
      <View>
      <Text style={styles.header}>Barcelona
            28°C
          </Text>
      </View>
      </ImageBackground>
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
  header: {
    padding: 90,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
  },
});


{/* <FlatList
            style={styles.weatherBarRight} 
            data={ marineWeather }
            keyExtractor={(item) => item.time}
            renderItem={ renderItem }
          />  */}

          // const [marineWeather, setMarineWeather] = useState([]);

          // useEffect(() => {
        
          //   fetch( API_URL, {
          //     headers: {
          //       'Authorization': "api key",
          //     }
          //   }
          // )
          //   .then((response) => (response.json()))
          //   .then((jsonData) => { console.log(jsonData.hours), setMarineWeather(jsonData.hours) })
          // },[])

import React, { useState, useEffect } from 'react'
import { Pressable, FlatList, StyleSheet, Text, View, ImageBackground, ScrollView, VirtualizedList } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const keyGenerator = uuidv4().toString();
const moment = require('moment')

const days = []
const daysRequired = 6

for (let i = 0; i <= daysRequired; i++) {
  days.push(moment().add(i, 'days').format('dddd, Do MMMM'))
}

export default function WeatherMain ({ navigation }) {
  // const swimIcon = [swimIcon, setSwimIcon] = useState([
  //   require('../assets/green_swimming_icon.png'),
  //   require('../assets/orange_swimming_icon.png'),
  //   require('../assets/red_swimming_icon.png')
  // ]);

  const onPressHandler = () => {
    navigation.navigate('WeatherDetail')
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/waveswim_background.png')}
          style={{ width: '100%', height: '100%' }}
        >

          <Text style={styles.header}>Barcelona
            28°C {'\n'}
            __________ 
          </Text>
          <View style={styles.weatherBar}>

            <View style={styles.weatherBarLeft}>
              {days.map((day, index) => {
                return (
                  <Pressable>
                    <Text
                      style={styles.weatherBarText}
                      key={keyGenerator}
                      onPress={onPressHandler}
                    >
                      {day}
                    </Text>
                  </Pressable>
                )
              })}
            </View>

            <View>
              
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
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
    fontSize: 30,
    fontFamily: 'Montserrat-Regular'
  },
  weatherBar: {
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  weatherBarLeft: {
    padding: 5,
    marginLeft: 10,
    alignSelf: 'flex-start'
  },
  weatherBarRight: {
    padding: 10,
    alignSelf: 'flex-end',
    marginRight: 20
  },
  weatherBarText: {
    margin: 20,
    color: 'white',
    fontFamily: 'Montserrat-Regular'
  }
})

import React, { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import { BackgroundImage } from 'react-native-elements/dist/config'

const keyGenerator = uuidv4().toString()
const moment = require('moment')

const days = []
const daysRequired = 6

for (let i = 0; i <= daysRequired; i++) {
  days.push(moment().add(i, 'days').format('dddd, Do MMMM'))
}

export default function WeatherMain ({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate('WeatherDetail')
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/waveswim_background.png')}
        style={styles.image}
        resizeMode='cover'
      >
        <ScrollView>

          <Text style={styles.header}>Barcelona
            28°C {'\n'}
            __________ 
          </Text>

          <View style={styles.containerWrapper}>

            <View style={styles.containerOne}>
              {days.map((day, index) => {
                return (
                  <Pressable>
                    <Text
                      style={styles.weatherKey}
                      key={keyGenerator}
                      onPress={onPressHandler}
                    >
                      {day}
                    </Text>
                  </Pressable>
                )
              })}
            </View>
            <View style={styles.containerTwo}>
              <FontAwesome5 name='swimmer' style={styles.icon} size={30}/>
              <FontAwesome5 name='swimmer' style={styles.icon} size={30}/>
              <FontAwesome5 name='swimmer' style={styles.icon} size={30}/>
              <FontAwesome5 name='swimmer' style={styles.icon} size={30}/>
              <FontAwesome5 name='swimmer' style={styles.icon} size={30}/>
              <FontAwesome5 name='swimmer' style={styles.icon} size={30}/>
              <FontAwesome5 name='swimmer' style={styles.icon} size={30}/>
            </View>

          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    fontFamily: 'Montserrat-Medium'
  },
  containerWrapper: {
    flexDirection: 'row',
    flex: 1
  },
  containerOne: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
    padding: 10
  },
  containerTwo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  weatherKey: {
    padding: 12,
    marginTop: 10,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
  },
  weatherValue: {
    padding: 10,
    color: 'white',
    marginTop: 7
  },
  icon: {
    padding: 20,
    alignItems: 'center',
    color: 'lightgreen',
    marginLeft: 50,
    marginTop: 4
    
  }
})

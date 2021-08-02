import React, { useState, useEffect } from 'react'
import { Pressable, FlatList, StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'

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
            28°C
          </Text>
          <View style={styles.weatherBar}>

            <View style={styles.weatherBarLeft}>
              {days.map((day, index) => {
                return (
                  <Pressable>
                    <Text
                      style={styles.weatherBarText}
                      key={index}
                      onPress={onPressHandler}
                    >
                      {day}
                    </Text>
                  </Pressable>
                )
              })}
            </View>

            <View>
              <FlatList />
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
    fontSize: 30
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
    color: 'white'
  }
})

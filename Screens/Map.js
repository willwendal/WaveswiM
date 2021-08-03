import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Pressable, Button, StyleSheet, Text, View, Dimensions } from 'react-native'

export default function Map ({ navigation }) {
  // const [isShowing, setIsShowing] = useState(false)

 
  const onPressHandler = () => {
    navigation.navigate('WeatherMain')
  }

  const toggleShow = () => {
    
    if (styles.marker.opacity === 0) {
      styles.marker.opacity = 1;
    } else {
      styles.marker.opacity = 0;
    }
  }

  return (
    <View style={styles.container}>
      <View>

        <MapView
          style={styles.map}
          onPress={toggleShow}
          initialRegion={{
            latitude: 41.253009,
            longitude: 2.189291,
            latitudeDelta: 15.15108,
            longitudeDelta: 15.1215,
          }}
        >
          <Marker
            coordinate={{ latitude: 41.253009, longitude: 2.189291 }}
            show={{ show: false }}
            onPress={onPressHandler}
            style={styles.marker}
          />
        </MapView>
      </View>

      <View style={styles.button}>
        <Pressable>
          <Button
            title='Generate Weather'
            onPress={onPressHandler}
          />
        </Pressable>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1faee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginTop: 20
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  marker: {
    opacity: 1
  }
})

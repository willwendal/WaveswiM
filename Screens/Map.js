import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Pressable, Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import { useState } from 'react';



export default function Map({ navigation }) {
  const [isShowing, setIsShowing] = useState(false);

  const togglePin = () => {
    
    isShowing ? styles.marker.opacity = 1 : styles.marker.opacity = 0
    setIsShowing(true);
  }
  
  
  // return (
  //     <Marker>
  //         {isShowing ? styles.marker /*opactiy 0*/ : styles.marker /*opacity 100 */ }
  //     </Marker>
  //     );

  
  
  const onPressHandler = () => {
    navigation.navigate("WeatherMain");
  }


  
  return (
  <View style={styles.container}>
    <View>
        
        <MapView style={styles.map} 
            initialRegion={{
            latitude: 41.253009,
            longitude: 2.189291,
            latitudeDelta: 3.15108,
            longitudeDelta: 3.1215,
          }}>
            <Marker coordinate={{ latitude: 41.253009, longitude: 2.189291 }} 
                    show={{show: false}} 
                    onPress={ onPressHandler } 
                    style={styles.marker} />
        </MapView>
    </View> 
      
      <View style={styles.button}>
        <Pressable>
          <Button 
          title={'Generate Weather'}
          onPress={ onPressHandler }
          />
        </Pressable>
      </View> 
      
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
  button: {
    marginTop: 20,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  marker: {
    opacity: 1,
  }
});

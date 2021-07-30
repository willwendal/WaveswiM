import React from 'react';
import MapView from 'react-native-maps';
import { Pressable, Button, StyleSheet, Text, View, Dimensions } from 'react-native';



export default function Map({ navigation }) {

  const onPressHandler = () => {
    navigation.navigate("WeatherMain");
  }


  
  return (
  
    <View style={styles.container}>
      <View style={styles.container}>
        <MapView style={styles.map} 
            initialRegion={{
            latitude: 41.253009,
            longitude: 2.189291,
            latitudeDelta: 3.15108,
            longitudeDelta: 3.1215,
          }}
        />
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
});

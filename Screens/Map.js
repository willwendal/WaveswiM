import React from 'react';
import { Pressable, Button, StyleSheet, Text, View } from 'react-native';



export default function Map({ navigation }) {

  const onPressHandler = () => {
    navigation.navigate("WeatherMain");
  }
  
  return (
  
    <View style={styles.container}>
      <View>
      <Text>Map Screen</Text>
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
  }
});

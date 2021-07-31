import React from 'react';
import { Pressable, Button, StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Home({ navigation }) {

const onPressHandler = () => {
  navigation.navigate("Map");
}
  
  return (
  
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/waveswim_background.png')}
        style={{width: '100%', height: '100%'}}
      >
      
      <View style={styles.header}>
      <Text style={{fontSize: 40, color: 'white'}}>Wave swiM</Text>
      </View>
      <View style={styles.button}>
        <Pressable>
          <Button 
            style={styles.button}
            title={ 'Let\'s Go' } 
            onPress={ onPressHandler }
          />
        </Pressable> 
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
  button: {
    alignItems: 'center',
    marginTop: 350
  },
  header: {
    alignItems: 'center',
    marginTop: 100,
  }
});
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default function App() {

  const clickHandler = () => {
    //go to maps screen
  }
  
  return (
  
    <View style={styles.container}>
      <Button title = { 'Let\'s Go' } onPress={clickHandler}/>
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
});

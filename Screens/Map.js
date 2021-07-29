import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


export default function MapScreen() {

  
  return (
  
    <View style={styles.container}>
      <View>
      <Text>Map Screen</Text>
      </View>
      <View>
        <Button title={'Generate Weather'}/>
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
});

import React from 'react';
import { Pressable, Button, StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {

const onPressHandler = () => {
  navigation.navigate("Map");
}
  
  return (
  
    <View style={styles.container}>
      <View>
      <Text>Welcome to Wave swiM</Text>
      </View>
      <View style={styles.button}>
        <Pressable>
          <Button 
            title={ 'Let\'s Go' } 
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
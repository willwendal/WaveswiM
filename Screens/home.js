import React from 'react'
import { Pressable, Button, StyleSheet, Text, View, ImageBackground } from 'react-native'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export default function Home ({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf')
  })

  const onPressHandler = () => {
    navigation.navigate('Map')
  }

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (

      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/waveswim_background.png')}
          style={{ width: '100%', height: '100%' }}
        >

          <View style={styles.header}>
            <Text style={styles.title}>Wave swiM</Text>
          </View>
          <View style={styles.button}>
            <Pressable>
              <Button
                style={styles.button}
                title={'Let\'s Go'}
                onPress={onPressHandler}
              />
            </Pressable>
          </View>
        </ImageBackground>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1faee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    marginTop: 350,
    fontFamily: 'Montserrat-Regular'
    // backgroundColor: "#009688"
  },
  header: {
    alignItems: 'center',
    marginTop: 100
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'Montserrat-Regular'
  }
})

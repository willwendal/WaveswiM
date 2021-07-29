import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Map from '../screens/map';
import WeatherMain from '../screens/weatherMain';
import WeatherDetail from '../screens/weatherDetail';
import Home from '../screens/home';

const screens = {
  Home: {
    screen: Home
  },
  Map: {
    screen: Map
  },
  weatherMain: {
    screen: WeatherMain
  },
  weatherDetail: {
    screen: WeatherDetail
  }
}

const MapStack = createStackNavigator({screens});

export default NavigationContainer(MapStack);
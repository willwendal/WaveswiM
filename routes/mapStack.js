import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Map from '../screens/map';
import WeatherMain from '../screens/weatherMain';
import WeatherDetail from '../screens/weatherDetail';

const screens = {
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
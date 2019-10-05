import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import UserScreen from '../screens/UserScreen';
import MapScreen from '../screens/MapScreen';
import PollingScreen from '../screens/PollingScreen';
import {FontAwesome, MaterialIcons} from '@expo/vector-icons';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: UserScreen,
  },
  config
);

// HomeStack.navigationOptions = {
//   tabBarLabel: 'User',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

HomeStack.navigationOptions = {
  tabBarLabel: 'User',
  tabBarIcon: () => (
      <FontAwesome style={{fontSize:28}} name="user"/>
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: MapScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: () => (
      <FontAwesome style={{fontSize:22}} name="map"/>
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: PollingScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Poll',
  tabBarIcon: () => (
      <MaterialIcons style={{fontSize:28}} name="poll"/>
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';


export default tabNavigator;

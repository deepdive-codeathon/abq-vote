import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';
import React from 'react';
import Routes from './Routes';
import LaunchScreen from '../screens/Launch';
// Screens Objects
import LoginStack from './LoginStack';
import MainStack from './MainStack';

const Root = {screen: LaunchScreen};

// Manifest of possible screens
const PrimaryNav = createAnimatedSwitchNavigator(
  {
    [Routes.MAIN_APP]: {
      screen: MainStack,
      path: 'home',
    },
    [Routes.LOGIN_STACK]: {screen: LoginStack, path: 'login'},
    [Routes.LOADING]: Root,
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-left"
          durationMs={200}
          interpolation="easeIn"
        />
        <Transition.In type="slide-right" durationMs={200} />
      </Transition.Together>
    ),
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: Routes.LOADING,
  },
);

const ModalNav = createStackNavigator(
  {
    Main: {
      screen: PrimaryNav,
      path: 'app',
    },
  },
  {
    mode: 'modal',
    initialRouteName: 'Main',
    headerMode: 'none',
  },
);

export default createAppContainer(ModalNav);

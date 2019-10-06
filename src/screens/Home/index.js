/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import LoadingActionContainer from '../../components/LoadingActionContainer';
import {Container, ButtonX, HeaderButton} from '../../components';
import NavigationStyles from '../../styles/NavigationStyles';
import useAuth from '../../services/Auth';
import useTheme from '../../themes/Context';
import * as WebBrowser from 'expo-web-browser';
import Map from '../../components/Map';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const MainScreen = ({navigation}) => {
  const {theme} = useTheme();

  return (
    <LoadingActionContainer fixed>
      <Container
        style={{
          justifyContent: 'center',
          padding: 20,
        }}>
        <Text style={{fontSize: 20, textAlign: 'center', padding: 20}}>
          Home screen
        </Text>
        <Map />
      </Container>
    </LoadingActionContainer>
  );
};

MainScreen.navigationOptions = ({navigation, screenProps}) => {
  const {theme} = screenProps;
  return {
    headerStyle: [
      NavigationStyles.header_statusBar,
      {backgroundColor: theme.colors.header},
    ],
    headerTitle: 'home',
    headerTintColor: theme.colors.headerTitle,
    headerTitleStyle: [
      NavigationStyles.headerTitle,
      {color: theme.colors.headerTitle},
    ],
  };
};

export default MainScreen;

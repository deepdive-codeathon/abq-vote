/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import LoadingActionContainer from '../../components/LoadingActionContainer';
import {Container, ButtonX, HeaderButton} from '../../components';
import NavigationStyles from '../../styles/NavigationStyles';
import NavigationService from '../../navigation';
import useAuth from '../../services/Auth';
import useTheme from '../../themes/Context';
import * as WebBrowser from 'expo-web-browser';
import Map from '../../components/Map';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const MainScreen = ({navigation}) => {
  const {theme} = useTheme();

  const _toggleDrawer = props => {
    NavigationService.openDrawer();
  };

  useEffect(() => {
    navigation.setParams({openDrawer: _toggleDrawer});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  const {t, theme} = screenProps;
  return {
    headerStyle: [
      NavigationStyles.header_statusBar,
      {backgroundColor: theme.colors.header},
    ],
    headerTitle: t('home'),
    headerTintColor: theme.colors.headerTitle,
    headerTitleStyle: [
      NavigationStyles.headerTitle,
      {color: theme.colors.headerTitle},
    ],
    headerLeft: (
      <View style={{marginLeft: 10}}>
        <HeaderButton
          icon="ios-menu"
          onPress={navigation.getParam('openDrawer', null)}
        />
      </View>
    ),
  };
};

export default MainScreen;

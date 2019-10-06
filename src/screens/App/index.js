/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useCallback} from 'react';
import {Text} from 'react-native';
import LoadingActionContainer from '../../components/LoadingActionContainer';
import {Container, ButtonX} from '../../components';
import NavigationStyles from '../../styles/NavigationStyles';
import useAuth from '../../services/Auth';
import useTheme from '../../themes/Context';

const MainScreen = ({navigation}) => {
  const {logout} = useAuth();
  const {theme} = useTheme();

  return (
    <LoadingActionContainer fixed>
      <Container
        style={{
          justifyContent: 'center',
          padding: 20,
        }}>
        <Text style={{fontSize: 24, color: theme.colors.primary}}>
          {'welcome'}
        </Text>

        <ButtonX dark={true} label={'logout'} onPress={logout} />
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
    headerTitle: ('notifications'),
    headerTintColor: theme.colors.headerTitle,
    headerTitleStyle: [
      NavigationStyles.headerTitle,
      {color: theme.colors.headerTitle},
    ],
  };
};

export default MainScreen;

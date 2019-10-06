/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Button} from 'react-native-paper';
import AppStateContext from '../../services/Auth/AppContext';
import LoadingActionContainer from '../../components/LoadingActionContainer';
import {Container} from '../../components';
import colors from '../../themes/Colors';
import NavigationStyles from '../../styles/NavigationStyles';

const AppUpdate = () => {
  const {state, logout} = useContext(AppStateContext);

  return (
    <LoadingActionContainer fixed>
      <Container
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24, color: colors.cyan700}}>
          APP UPDATE SCREEN
        </Text>

        <Button style={{marginTop: 20}} mode="contained">
          SAY HELLO !
        </Button>
      </Container>
    </LoadingActionContainer>
  );
};

export default AppUpdate;

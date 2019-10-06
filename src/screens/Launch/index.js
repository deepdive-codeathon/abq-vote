/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, ActivityIndicator} from 'react-native';
import colors from '../../themes/Colors';
import {Container} from '../../components';
import useTheme from '../../themes/Context';

export default function() {
  const {theme} = useTheme();

  return (
    <Container
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
      <Text
        style={{
          color: theme.colors.primary,
          fontSize: 24,
          paddingLeft: 10,
          marginTop: 10,
        }}>
        Give us a second...
      </Text>
    </Container>
  );
}

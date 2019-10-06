import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {isIos} from '../constants';

export default ({children, useSafeAreaView, ...other}) => {
  const Element = useSafeAreaView && isIos ? SafeAreaView : View;
  return <Element {...other}>{children}</Element>;
};

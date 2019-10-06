import React from './node_modules/react';
import {View, SafeAreaView} from 'react-native';
import {isIos} from '../Constants';

export default ({children, useSafeAreaView, ...other}) => {
  const Element = useSafeAreaView && isIos ? SafeAreaView : View;
  return <Element {...other}>{children}</Element>;
};
